import React from 'react';
import styled, { css } from 'styled-components';
import { ReflexElement } from 'react-reflex';
import { Tag, Colors } from '@blueprintjs/core';
import { getThemeProp } from '../../utils';

const createScrollShadow = color => css`
  /* Show shadow on scroll: https://gist.github.com/tbmiller/6675197 */
  background: linear-gradient(${color} 30%, hsla(0, 0%, 100%, 0)),
    linear-gradient(hsla(0, 0%, 100%, 0) 10px, ${color} 70%) bottom,
    radial-gradient(at top, rgba(0, 0, 0, 0.2), transparent 70%),
    radial-gradient(at bottom, rgba(0, 0, 0, 0.2), transparent 70%) bottom;
  background-repeat: no-repeat;
  background-size: 100% 20px, 100% 20px, 100% 10px, 100% 10px;
  background-attachment: local, local, scroll, scroll;
`;

const ListHeader = styled.header`
  display: flex;
  align-items: center;
  margin: 1rem 0 0.5rem;
  grid-area: header;
`;
const ListHeading = styled.h2`
  font-weight: 300;
  margin: 0;
  flex: 1;
`;

export const Pane = styled(ReflexElement)`
  display: grid;
  grid-template-rows: 1fr;
`;

export const PaneContainer = styled.div`
  padding: 0.5rem;
  display: grid;
  overflow: auto;
  background-color: ${props =>
    props.primary && getThemeProp(props, 'colors.mainPaneBackground', Colors.LIGHT_GRAY5)};
  grid-template-rows: auto 1fr 50px;
  grid-template-areas:
    'header'
    'body'
    'footer';
  ${props =>
    props.primary &&
    css`
      ${PaneContent} {
        ${createScrollShadow(getThemeProp(props, 'colors.mainPaneBackground', Colors.LIGHT_GRAY5))}
      }
    `};
`;

export const PaneContent = styled.div`
  grid-area: body;
  overflow: auto;
  margin: 0 ${p => (p.bleed ? '-0.5rem' : 0)};
  ${createScrollShadow('#fff')}
`;

export const PaneHeader = ({ count, title }) => (
  <ListHeader>
    <ListHeading>{title}</ListHeading>
    <If condition={typeof count === 'number'}>
      <Tag minimal round>
        {count}
      </Tag>
    </If>
  </ListHeader>
);

export const PaneFooter = styled.div`
  grid-area: footer;
`;
