// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'pnpm generate-icons'.
// Original SVG file: src/svg/tree-structure.react.svg
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
const SvgTreeStructure = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M16.5 20.2c-.495 0-.919-.176-1.27-.528a1.734 1.734 0 0 1-.53-1.272v-.9h-1.8c-.495 0-.919-.176-1.27-.528a1.734 1.734 0 0 1-.53-1.272V8.5H9.3v.9c0 .495-.176.919-.53 1.27-.351.354-.775.53-1.27.53H4.8c-.495 0-.919-.176-1.27-.53A1.731 1.731 0 0 1 3 9.4V5.8c0-.495.176-.919.53-1.272A1.733 1.733 0 0 1 4.8 4h2.7c.495 0 .919.176 1.27.528.354.353.53.777.53 1.272v.9h5.4v-.9c0-.495.176-.919.53-1.272A1.733 1.733 0 0 1 16.5 4h2.7c.495 0 .919.176 1.272.528.352.353.528.777.528 1.272v3.6c0 .495-.176.919-.528 1.27-.353.354-.777.53-1.272.53h-2.7c-.495 0-.919-.176-1.27-.53a1.731 1.731 0 0 1-.53-1.27v-.9h-1.8v7.2h1.8v-.9c0-.495.176-.919.53-1.272A1.733 1.733 0 0 1 16.5 13h2.7c.495 0 .919.176 1.272.528.352.353.528.777.528 1.272v3.6c0 .495-.176.919-.528 1.272a1.736 1.736 0 0 1-1.272.528h-2.7ZM4.8 5.8v3.6-3.6Zm11.7 9v3.6-3.6Zm0-9v3.6-3.6Zm0 3.6h2.7V5.8h-2.7v3.6Zm0 9h2.7v-3.6h-2.7v3.6Zm-11.7-9h2.7V5.8H4.8v3.6Z" />
  </svg>
);
SvgTreeStructure.displayName = 'SvgTreeStructure';
const TreeStructureIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgTreeStructure
        {...props}
        className={createClass(getIconStyles(props))}
      />
    )}
  </ClassNames>
);
TreeStructureIcon.displayName = 'TreeStructureIcon';
export default TreeStructureIcon;
