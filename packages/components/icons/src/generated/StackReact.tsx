// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'pnpm generate-icons'.
// Original SVG file: src/svg/stack.react.svg
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
const SvgStack = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M4 15a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 14c0-.283.096-.521.288-.713A.967.967 0 0 1 4 13h16c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 20 15H4Zm0 4a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 18c0-.283.096-.52.288-.712A.965.965 0 0 1 4 17h16c.283 0 .52.096.712.288A.965.965 0 0 1 21 18c0 .283-.096.52-.288.712A.965.965 0 0 1 20 19H4Zm0-8a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 10c0-.283.096-.521.288-.713A.967.967 0 0 1 4 9h16c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 20 11H4Zm0-4a.967.967 0 0 1-.712-.287A.968.968 0 0 1 3 6c0-.283.096-.521.288-.713A.967.967 0 0 1 4 5h16c.283 0 .52.096.712.287.192.192.288.43.288.713a.968.968 0 0 1-.288.713A.967.967 0 0 1 20 7H4Z" />
  </svg>
);
SvgStack.displayName = 'SvgStack';
const StackIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgStack {...props} className={createClass(getIconStyles(props))} />
    )}
  </ClassNames>
);
StackIcon.displayName = 'StackIcon';
export default StackIcon;
