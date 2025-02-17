// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/search.react.svg
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
const SvgSearch = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="m19.285 20.718-5.736-5.735a6.242 6.242 0 0 1-3.892 1.331c-1.86 0-3.435-.644-4.723-1.932C3.644 13.092 3 11.518 3 9.657c0-1.86.645-3.435 1.934-4.724C6.222 3.644 7.797 3 9.657 3c1.86 0 3.436.644 4.725 1.933 1.288 1.289 1.932 2.864 1.932 4.724a6.242 6.242 0 0 1-1.331 3.892l5.761 5.761a.94.94 0 0 1 .282.691.982.982 0 0 1-.308.717.97.97 0 0 1-.717.282.971.971 0 0 1-.716-.282Zm-9.628-6.452c1.28 0 2.369-.448 3.265-1.344.896-.896 1.344-1.985 1.344-3.265s-.448-2.368-1.344-3.265c-.896-.896-1.985-1.344-3.265-1.344s-2.368.448-3.265 1.344c-.896.897-1.344 1.985-1.344 3.265s.448 2.369 1.344 3.265c.897.896 1.985 1.344 3.265 1.344Z" />
  </svg>
);
SvgSearch.displayName = 'SvgSearch';
const SearchIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgSearch {...props} className={createClass(getIconStyles(props))} />
    )}
  </ClassNames>
);
SearchIcon.displayName = 'SearchIcon';
export default SearchIcon;
