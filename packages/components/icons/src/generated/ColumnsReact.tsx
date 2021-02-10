// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/columns.react.svg

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

const SvgColumns = (props: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="columns_react_svg__Icons"
      stroke="none"
      strokeWidth={1}
      fillRule="evenodd"
    >
      <g
        id="columns_react_svg__MC-icon-set"
        transform="translate(-168 -600)"
        fill="#000"
      >
        <g id="columns_react_svg__Grid-display" transform="translate(24 600)">
          <g id="columns_react_svg__Columns" transform="translate(144)">
            <path
              d="M19.2 17.6h-2.7v-1.8h2.7v1.8zm-6.3-1.8h2.7v1.8h-2.7v-1.8zm-3.6 0H12v1.8H9.3v-1.8zM12 9.5H9.3V6.8H12v2.7zm3.6 0h-2.7V6.8h2.7v2.7zm3.6 0h-2.7V6.8h2.7v2.7zm-2.7 3.6h2.7v1.8h-2.7v-1.8zm-3.6 0h2.7v1.8h-2.7v-1.8zm-3.6 0H12v1.8H9.3v-1.8zm2.7-.9H9.3v-1.8H12v1.8zm3.6 0h-2.7v-1.8h2.7v1.8zm3.6 0h-2.7v-1.8h2.7v1.8zm.113-7.2H3.9a.9.9 0 00-.9.9v12.6a.9.9 0 00.9.9H20.1a.9.9 0 00.9-.9V5.9a.9.9 0 00-.9-.9h-.788z"
              id="columns_react_svg__shape"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

SvgColumns.displayName = 'SvgColumns';

const ColumnsIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgColumns {...props} css={getIconStyles(props, theme)} />;
};

ColumnsIcon.displayName = 'ColumnsIcon';
export default ColumnsIcon;
