// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/export.react.svg
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
const SvgExport = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M9.8 16.275a.947.947 0 0 1-.288-.725c.009-.283.113-.525.313-.725L11.65 13H4a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 12c0-.283.096-.521.288-.713A.967.967 0 0 1 4 11h7.65L9.8 9.15c-.2-.2-.3-.437-.3-.712 0-.275.1-.513.3-.713.2-.2.438-.3.713-.3.275 0 .512.1.712.3L14.8 11.3c.1.1.171.208.213.325.041.117.062.242.062.375s-.02.258-.062.375a.883.883 0 0 1-.213.325l-3.6 3.6a.932.932 0 0 1-.687.275.974.974 0 0 1-.713-.3ZM5 21c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 0 1 3 19v-3c0-.283.096-.521.288-.713A.967.967 0 0 1 4 15a.97.97 0 0 1 .713.287A.97.97 0 0 1 5 16v3h14V5H5v3c0 .283-.096.52-.287.712A.968.968 0 0 1 4 9a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 8V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 0 1 5 3h14c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v14c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 19 21H5Z" />
  </svg>
);
SvgExport.displayName = 'SvgExport';
const ExportIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgExport {...props} className={createClass(getIconStyles(props))} />
    )}
  </ClassNames>
);
ExportIcon.displayName = 'ExportIcon';
export default ExportIcon;
