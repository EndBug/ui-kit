// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/close.react.svg

/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Theme } from '@emotion/react';
import React from 'react';
import { warning } from '@commercetools-uikit/utils';
import { css, useTheme } from '@emotion/react';
import { customProperties as vars } from '@commercetools-uikit/design-system';
export type Props = {
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

const getSizeDimensions = (size: Props['size']) => {
  switch (size) {
    case 'scale':
      return {
        width: '100%',
        height: 'auto',
      };

    case 'small':
    case 'medium':
    case 'big':
      return {
        width: `${iconSizes[size]}px`,
        height: `${iconSizes[size]}px`,
      };

    default:
      return {
        width: `${iconSizes.big}px`,
        height: `${iconSizes.big}px`,
      };
  }
};

const getSizeStyle = (size: Props['size']) => {
  const dimensions = getSizeDimensions(size);

  switch (size) {
    case 'scale':
      return `
        &:not(:root) {
          width: ${dimensions.width};
          height: ${dimensions.height};
        }
      `;

    default:
      return `
        width: ${dimensions.width};
        height: ${dimensions.height};
      `;
  }
};

const capitalize = (value: string) => value[0].toUpperCase() + value.slice(1);

const getColor = (color: Props['color'], theme: Theme) => {
  if (!color) return 'inherit';
  const overwrittenVars = { ...vars, ...theme }; // @ts-expect-error

  const iconColor = overwrittenVars[`color${capitalize(color)}`];

  if (!iconColor) {
    warning(
      color,
      `ui-kit/Icon: the specified color '${color}' is not supported.`
    );
    return 'inherit';
  }

  return iconColor;
};

export const getIconStyles = (props: Props, theme: Theme) => css`
  *:not([fill='none']) {
    fill: ${getColor(props.color, theme)};
  }
  &,
  image {
    ${getSizeStyle(props.size)};
  }
  flex-shrink: 0;
`;

const SvgClose = (props: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="close_react_svg__Icons"
      stroke="none"
      strokeWidth={1}
      fillRule="evenodd"
    >
      <g
        id="close_react_svg__MC-icon-set"
        transform="translate(-96 -648)"
        fill="#000"
      >
        <g id="close_react_svg__Actions" transform="translate(24 648)">
          <g id="close_react_svg__Close" transform="translate(72)">
            <path
              d="M11.031 11.616l-7.75 7.46a.442.442 0 000 .647.429.429 0 00.329.139c.14 0 .234-.047.375-.14l7.722-7.455 7.746 7.456a.429.429 0 00.328.139.512.512 0 00.328-.14c.235-.184.235-.461 0-.646l-7.738-7.45 7.739-7.471c.235-.185.235-.462 0-.647a.458.458 0 00-.657 0l-7.758 7.468-7.758-7.468a.458.458 0 00-.656 0 .442.442 0 000 .647l7.75 7.46z"
              id="close_react_svg__shape"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

SvgClose.displayName = 'SvgClose';

const CloseIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgClose {...props} css={getIconStyles(props, theme)} />;
};

CloseIcon.displayName = 'CloseIcon';
export default CloseIcon;
