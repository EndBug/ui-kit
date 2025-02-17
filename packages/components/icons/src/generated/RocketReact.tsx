// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/rocket.react.svg
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
const SvgRocket = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M7.648 11.105c.215-.43.437-.844.668-1.242.23-.4.483-.798.759-1.197l-1.289-.253-1.933 1.933 1.795.76ZM18.74 4.777c-1.074.03-2.22.345-3.44.944a12.414 12.414 0 0 0-3.326 2.393 14.71 14.71 0 0 0-1.726 2.07c-.506.737-.882 1.428-1.127 2.072l2.623 2.6c.645-.245 1.335-.621 2.071-1.127a14.714 14.714 0 0 0 2.071-1.726 12.484 12.484 0 0 0 2.393-3.314c.599-1.212.913-2.355.944-3.429a.527.527 0 0 0-.034-.184.453.453 0 0 0-.265-.265.527.527 0 0 0-.184-.034ZM13.677 10.3a1.768 1.768 0 0 1-.53-1.3c0-.514.177-.948.53-1.3.353-.353.79-.53 1.312-.53.521 0 .959.177 1.311.53.353.352.53.786.53 1.3 0 .513-.177.947-.53 1.3-.352.353-.79.53-1.311.53-.522 0-.959-.177-1.312-.53Zm-.782 6.029.76 1.818 1.932-1.933-.253-1.289c-.399.276-.798.525-1.197.747a30.81 30.81 0 0 1-1.242.657ZM20.972 4.04a10.576 10.576 0 0 1-.829 4.935c-.675 1.604-1.74 3.134-3.198 4.591l.46 2.278c.061.307.046.606-.046.898a1.843 1.843 0 0 1-.46.76l-2.9 2.899a.9.9 0 0 1-.828.264.823.823 0 0 1-.667-.54L11.1 16.835 7.165 12.9l-3.29-1.404a.85.85 0 0 1-.553-.667.876.876 0 0 1 .253-.828l2.9-2.9c.214-.214.472-.368.771-.46.299-.092.602-.107.908-.046l2.279.46c1.457-1.457 2.987-2.523 4.59-3.198a10.575 10.575 0 0 1 4.936-.829c.123.016.246.05.368.103a1.047 1.047 0 0 1 .54.542c.055.122.09.245.105.368ZM4.726 15.362c.537-.537 1.192-.81 1.967-.817.775-.007 1.43.257 1.968.794.537.537.801 1.193.793 1.967-.007.775-.28 1.431-.816 1.968-.384.384-1.024.713-1.921.99-.898.276-2.137.521-3.717.736.215-1.58.46-2.819.736-3.717.276-.897.606-1.537.99-1.92Zm1.311 1.289c-.153.153-.306.433-.46.84a5.94 5.94 0 0 0-.322 1.23 6.473 6.473 0 0 0 1.232-.31c.406-.145.686-.295.84-.449a.996.996 0 0 0 .298-.667.835.835 0 0 0-.253-.667.872.872 0 0 0-.667-.265.953.953 0 0 0-.668.288Z" />
  </svg>
);
SvgRocket.displayName = 'SvgRocket';
const RocketIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgRocket {...props} className={createClass(getIconStyles(props))} />
    )}
  </ClassNames>
);
RocketIcon.displayName = 'RocketIcon';
export default RocketIcon;
