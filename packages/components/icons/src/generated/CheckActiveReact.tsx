// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'pnpm generate-icons'.
// Original SVG file: src/svg/check-active.react.svg
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
const SvgCheckActive = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="m10.74 13.62-1.957-1.957a.826.826 0 0 0-.608-.248c-.24 0-.45.09-.63.27a.853.853 0 0 0-.247.63c0 .255.082.465.247.63l2.565 2.565a.853.853 0 0 0 .63.248.853.853 0 0 0 .63-.248l5.107-5.107a.826.826 0 0 0 .248-.608c0-.24-.09-.45-.27-.63a.853.853 0 0 0-.63-.247.853.853 0 0 0-.63.247L10.74 13.62ZM12 21a8.759 8.759 0 0 1-3.51-.71 9.082 9.082 0 0 1-2.857-1.922 9.082 9.082 0 0 1-1.924-2.858A8.759 8.759 0 0 1 3 12c0-1.245.236-2.415.71-3.51a9.082 9.082 0 0 1 1.923-2.857A9.095 9.095 0 0 1 8.49 3.708 8.769 8.769 0 0 1 12 3c1.245 0 2.415.236 3.51.708a9.095 9.095 0 0 1 2.857 1.925 9.082 9.082 0 0 1 1.924 2.857A8.759 8.759 0 0 1 21 12a8.759 8.759 0 0 1-.71 3.51 9.082 9.082 0 0 1-1.922 2.857 9.082 9.082 0 0 1-2.858 1.924A8.759 8.759 0 0 1 12 21Z" />
  </svg>
);
SvgCheckActive.displayName = 'SvgCheckActive';
const CheckActiveIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgCheckActive
        {...props}
        className={createClass(getIconStyles(props))}
      />
    )}
  </ClassNames>
);
CheckActiveIcon.displayName = 'CheckActiveIcon';
export default CheckActiveIcon;
