// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/user-linear.react.svg
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
const SvgUserLinear = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M12 12c-1.238 0-2.297-.44-3.178-1.322C7.94 9.797 7.5 8.738 7.5 7.5c0-1.237.44-2.297 1.322-3.178C9.703 3.44 10.762 3 12 3s2.297.44 3.178 1.322c.881.881 1.322 1.94 1.322 3.178s-.44 2.297-1.322 3.178C14.297 11.56 13.238 12 12 12Zm6.75 9H5.25c-.619 0-1.148-.22-1.588-.66A2.167 2.167 0 0 1 3 18.75v-.9c0-.638.164-1.224.493-1.758A3.277 3.277 0 0 1 4.8 14.869a16.722 16.722 0 0 1 3.544-1.309c1.2-.29 2.418-.435 3.656-.435s2.456.145 3.656.435c1.2.291 2.382.727 3.544 1.309.544.281.98.689 1.307 1.223.329.534.493 1.12.493 1.758v.9a2.17 2.17 0 0 1-.66 1.59c-.441.44-.971.66-1.59.66Zm-13.5-2.25h13.5v-.9c0-.206-.051-.394-.154-.563-.104-.168-.24-.3-.409-.393a14.687 14.687 0 0 0-3.065-1.14 13.072 13.072 0 0 0-6.244 0 14.686 14.686 0 0 0-3.066 1.14 1.09 1.09 0 0 0-.562.956v.9Zm6.75-9c.619 0 1.149-.22 1.59-.662.44-.44.66-.97.66-1.588 0-.619-.22-1.148-.66-1.588A2.167 2.167 0 0 0 12 5.25c-.619 0-1.148.22-1.588.662-.442.44-.662.97-.662 1.588 0 .619.22 1.148.662 1.588.44.442.97.662 1.588.662Z" />
  </svg>
);
SvgUserLinear.displayName = 'SvgUserLinear';
const UserLinearIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgUserLinear {...props} className={createClass(getIconStyles(props))} />
    )}
  </ClassNames>
);
UserLinearIcon.displayName = 'UserLinearIcon';
export default UserLinearIcon;
