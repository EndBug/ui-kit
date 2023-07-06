// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'pnpm generate-icons'.
// Original SVG file: src/svg/clipboard.react.svg
/* eslint-disable @typescript-eslint/no-unused-vars */
import { warning } from '@commercetools-uikit/utils';
import { css, ClassNames } from '@emotion/react';
import { designTokens } from '@commercetools-uikit/design-system';
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
export type SVGProps = Props & {
  className: string;
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
const getColor = (color: Props['color']) => {
  if (!color) return 'inherit';
  let iconColor;
  switch (color) {
    case 'solid':
      iconColor = designTokens.colorSolid;
      break;
    case 'neutral60':
      iconColor = designTokens.colorNeutral60;
      break;
    case 'surface':
      iconColor = designTokens.colorSurface;
      break;
    case 'info':
      iconColor = designTokens.colorInfo;
      break;
    case 'primary':
      iconColor = designTokens.colorPrimary;
      break;
    case 'primary40':
      iconColor = designTokens.colorPrimary40;
      break;
    case 'warning':
      iconColor = designTokens.colorWarning;
      break;
    case 'error':
      iconColor = designTokens.colorError;
      break;
    default:
      break;
  }
  if (!iconColor) {
    warning(
      color,
      `ui-kit/Icon: the specified color '${color}' is not supported.`
    );
    return 'inherit';
  }
  return iconColor;
};
export const getIconStyles = (props: Props) => css`
  *:not([fill='none']) {
    fill: ${getColor(props.color)};
  }
  &,
  image {
    ${getSizeStyle(props.size)};
  }
  flex-shrink: 0;
`;
const SvgClipboard = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M9.4 17.4c-.495 0-.919-.176-1.27-.528A1.734 1.734 0 0 1 7.6 15.6V4.8c0-.495.176-.919.53-1.272A1.733 1.733 0 0 1 9.4 3h8.1c.495 0 .919.176 1.272.528.352.353.528.777.528 1.272v10.8c0 .495-.176.919-.528 1.272a1.736 1.736 0 0 1-1.272.528H9.4Zm0-1.8h8.1V4.8H9.4v10.8ZM5.8 21c-.495 0-.919-.176-1.272-.528A1.736 1.736 0 0 1 4 19.2V7.5c0-.255.086-.469.26-.642A.87.87 0 0 1 4.9 6.6c.255 0 .469.086.642.258A.873.873 0 0 1 5.8 7.5v11.7h9c.255 0 .469.086.642.26a.87.87 0 0 1 .258.64.87.87 0 0 1-.258.64.872.872 0 0 1-.642.26h-9ZM9.4 4.8v10.8V4.8Z" />
  </svg>
);
SvgClipboard.displayName = 'SvgClipboard';
const ClipboardIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgClipboard {...props} className={createClass(getIconStyles(props))} />
    )}
  </ClassNames>
);
ClipboardIcon.displayName = 'ClipboardIcon';
export default ClipboardIcon;
