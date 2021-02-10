// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/list.react.svg

/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Theme } from '@emotion/react';
import React from 'react';
import { invariant } from '@commercetools-uikit/utils';
import { css, useTheme } from '@emotion/react';
import { customProperties as vars } from '@commercetools-uikit/design-system';
type Props = {
  color?:
    | 'solid'
    | 'neutral60'
    | 'surface'
    | 'info'
    | 'primary'
    | 'primary40'
    | 'warning'
    | 'error';
  size?: 'small' | 'medium' | 'big' | 'scale';
};
const iconSizes = {
  small: 12,
  medium: 16,
  big: 24,
} as const;

const getSizeStyle = (size: Props['size']) => {
  switch (size) {
    case 'scale':
      return `
        &:not(:root) {
          width: 100%;
          height: auto;
        }
      `;

    case 'small':
    case 'medium':
    case 'big':
      return `
        width: ${iconSizes[size]}px;
        height: ${iconSizes[size]}px;
      `;

    default:
      return `
        width: ${iconSizes.big}px;
        height: ${iconSizes.big}px;
      `;
  }
};

const capitalize = (value: string) => value[0].toUpperCase() + value.slice(1);

const getColor = (color: Props['color'], theme: Theme) => {
  if (!color) return 'inherit';
  const overwrittenVars = { ...vars, ...theme }; // @ts-expect-error

  const iconColor = overwrittenVars[`color${capitalize(color)}`];

  if (!iconColor) {
    invariant(
      color,
      `ui-kit/Icon: the specified color '${color}' is not supported.`
    );
    return 'inherit';
  }

  return iconColor;
};

const getIconStyles = (props: Props, theme: Theme) => css`
  * {
    fill: ${getColor(props.color, theme)};
  }
  ${getSizeStyle(props.size)};
  flex-shrink: 0;
`;

const SvgList = (props: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="list_react_svg__Icons"
      stroke="none"
      strokeWidth={1}
      fillRule="evenodd"
    >
      <g
        id="list_react_svg__MC-icon-set"
        transform="translate(-24 -600)"
        fill="#000"
      >
        <g id="list_react_svg__Grid-display" transform="translate(24 600)">
          <g id="list_react_svg__List">
            <path
              d="M5.248 9.837a.31.31 0 01.226.094.304.304 0 01.095.223v1.905c0 .086-.031.16-.095.223a.31.31 0 01-.226.094H3.321a.311.311 0 01-.226-.094.303.303 0 01-.095-.223v-1.905c0-.086.032-.16.095-.223a.31.31 0 01.226-.094h1.927zm0 7.617a.31.31 0 01.226.094.303.303 0 01.095.224v1.904c0 .086-.031.16-.095.223a.31.31 0 01-.226.094H3.321a.31.31 0 01-.226-.094.303.303 0 01-.095-.223v-1.904c0-.086.032-.16.095-.224a.31.31 0 01.226-.094h1.927zm0-3.808a.31.31 0 01.226.094.304.304 0 01.095.223v1.904c0 .086-.031.16-.095.223a.31.31 0 01-.226.095H3.321a.31.31 0 01-.226-.095.303.303 0 01-.095-.223v-1.904c0-.086.032-.16.095-.223a.311.311 0 01.226-.094h1.927zm0-7.618c.087 0 .163.032.226.095a.303.303 0 01.095.223V8.25c0 .086-.031.16-.095.223a.31.31 0 01-.226.094H3.321a.31.31 0 01-.226-.094A.303.303 0 013 8.25V6.346c0-.086.032-.16.095-.223a.31.31 0 01.226-.095h1.927zm15.418 11.426c.087 0 .162.032.226.094a.303.303 0 01.095.224v1.904c0 .086-.032.16-.095.223a.31.31 0 01-.226.094H7.176a.31.31 0 01-.226-.094.303.303 0 01-.096-.223v-1.904c0-.086.032-.16.096-.224a.31.31 0 01.226-.094h13.49zm0-3.808c.087 0 .162.031.226.094a.304.304 0 01.095.223v1.904c0 .086-.032.16-.095.223a.31.31 0 01-.226.095H7.176a.31.31 0 01-.226-.095.303.303 0 01-.096-.223v-1.904c0-.086.032-.16.096-.223a.311.311 0 01.226-.094h13.49zm.226-7.523a.304.304 0 01.095.223V8.25c0 .086-.032.16-.095.223a.31.31 0 01-.226.094H7.176a.31.31 0 01-.226-.094.303.303 0 01-.096-.223V6.346c0-.086.032-.16.096-.223a.31.31 0 01.226-.095h13.49c.087 0 .162.032.226.095zm-.226 3.714a.31.31 0 01.226.094.304.304 0 01.095.223v1.905c0 .086-.032.16-.095.223a.31.31 0 01-.226.094H7.176a.311.311 0 01-.226-.094.303.303 0 01-.096-.223v-1.905c0-.086.032-.16.096-.223a.31.31 0 01.226-.094h13.49z"
              id="list_react_svg__shape"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

SvgList.displayName = 'SvgList';

const ListIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgList {...props} css={getIconStyles(props, theme)} />;
};

ListIcon.displayName = 'ListIcon';
export default ListIcon;
