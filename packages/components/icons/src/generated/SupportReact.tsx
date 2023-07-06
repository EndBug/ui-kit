// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'pnpm generate-icons'.
// Original SVG file: src/svg/support.react.svg
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
const SvgSupport = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M11.955 17.4c.315 0 .581-.109.8-.327.216-.217.325-.483.325-.798 0-.315-.109-.581-.326-.798a1.087 1.087 0 0 0-.799-.327c-.315 0-.581.109-.8.327a1.086 1.086 0 0 0-.325.798c0 .315.109.581.326.798.218.218.484.327.799.327Zm.135-9.27c.42 0 .758.116 1.012.348.255.233.383.537.383.912 0 .255-.086.514-.258.776a4.405 4.405 0 0 1-.732.822c-.45.39-.78.764-.99 1.125-.21.36-.315.72-.315 1.08 0 .21.079.386.237.528a.813.813 0 0 0 1.113-.01c.165-.151.27-.338.315-.563.045-.255.146-.492.304-.709.157-.218.416-.499.776-.844.465-.435.791-.833.98-1.193.186-.36.28-.757.28-1.192 0-.765-.289-1.391-.866-1.88-.578-.486-1.324-.73-2.239-.73-.63 0-1.189.12-1.676.36a2.56 2.56 0 0 0-1.136 1.103.892.892 0 0 0-.113.573c.03.188.135.341.315.462.195.12.409.157.642.112a.9.9 0 0 0 .573-.383c.165-.225.364-.397.597-.517.232-.12.498-.18.798-.18ZM12 21a8.704 8.704 0 0 1-3.488-.71 9.214 9.214 0 0 1-2.868-1.922A8.985 8.985 0 0 1 3.71 15.51 8.759 8.759 0 0 1 3 12c0-1.245.236-2.415.71-3.51a8.985 8.985 0 0 1 1.934-2.857 9.227 9.227 0 0 1 2.868-1.925A8.713 8.713 0 0 1 12 3c1.26 0 2.438.236 3.533.708a9.095 9.095 0 0 1 2.857 1.925 8.934 8.934 0 0 1 1.912 2.857A8.886 8.886 0 0 1 21 12a8.886 8.886 0 0 1-.698 3.51 8.934 8.934 0 0 1-1.912 2.857 9.082 9.082 0 0 1-2.857 1.924A8.815 8.815 0 0 1 12 21Zm0-1.8c2.01 0 3.713-.701 5.108-2.103C18.503 15.694 19.2 13.995 19.2 12c0-1.995-.697-3.694-2.092-5.097C15.712 5.501 14.01 4.8 12 4.8c-1.965 0-3.656.701-5.074 2.103C5.509 8.306 4.8 10.005 4.8 12c0 1.995.709 3.694 2.126 5.097C8.344 18.499 10.035 19.2 12 19.2Z" />
  </svg>
);
SvgSupport.displayName = 'SvgSupport';
const SupportIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgSupport {...props} className={createClass(getIconStyles(props))} />
    )}
  </ClassNames>
);
SupportIcon.displayName = 'SupportIcon';
export default SupportIcon;
