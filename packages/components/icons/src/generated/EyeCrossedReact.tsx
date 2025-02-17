// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/eye-crossed.react.svg
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
const SvgEyeCrossed = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="m15.354 12.39-1.186-1.186c.123-.64-.061-1.24-.552-1.8-.491-.559-1.125-.777-1.902-.654l-1.187-1.186c.232-.11.467-.191.706-.246.239-.054.494-.082.767-.082 1.023 0 1.892.358 2.608 1.074.716.716 1.074 1.585 1.074 2.608 0 .273-.027.529-.082.768a3.47 3.47 0 0 1-.245.705Zm2.619 2.578-1.187-1.145a8.968 8.968 0 0 0 1.381-1.3 7.281 7.281 0 0 0 1.033-1.605 8.045 8.045 0 0 0-2.936-3.283C14.99 6.824 13.568 6.418 12 6.418c-.396 0-.784.027-1.166.082a7.877 7.877 0 0 0-1.125.245L8.441 5.477A9.087 9.087 0 0 1 12 4.782c2.06 0 3.893.569 5.502 1.707A9.74 9.74 0 0 1 21 10.92a9.585 9.585 0 0 1-1.237 2.24 9.022 9.022 0 0 1-1.79 1.81ZM18.382 20l-3.437-3.395c-.477.15-.957.262-1.441.337a9.855 9.855 0 0 1-1.504.113c-2.06 0-3.893-.57-5.502-1.708A9.74 9.74 0 0 1 3 10.918a9.708 9.708 0 0 1 1.084-2.015 9.427 9.427 0 0 1 1.493-1.667l-2.25-2.29L4.473 3.8l15.054 15.055L18.382 20ZM6.722 8.382A8.785 8.785 0 0 0 5.64 9.548c-.328.422-.607.88-.839 1.37a8.04 8.04 0 0 0 2.935 3.283c1.275.811 2.697 1.217 4.265 1.217.273 0 .539-.017.798-.05.259-.035.525-.072.797-.114l-.736-.777c-.15.041-.293.072-.43.092A2.86 2.86 0 0 1 12 14.6c-1.023 0-1.892-.358-2.608-1.073-.716-.717-1.074-1.586-1.074-2.609 0-.15.01-.293.03-.43.021-.136.052-.279.093-.429L6.723 8.382Z" />
  </svg>
);
SvgEyeCrossed.displayName = 'SvgEyeCrossed';
const EyeCrossedIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgEyeCrossed {...props} className={createClass(getIconStyles(props))} />
    )}
  </ClassNames>
);
EyeCrossedIcon.displayName = 'EyeCrossedIcon';
export default EyeCrossedIcon;
