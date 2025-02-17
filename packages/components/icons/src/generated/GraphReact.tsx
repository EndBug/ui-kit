// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/graph.react.svg
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
const SvgGraph = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M5.25 21c-.619 0-1.148-.22-1.588-.66A2.167 2.167 0 0 1 3 18.75v-7.875c0-.619.22-1.149.662-1.59.44-.44.97-.66 1.588-.66.619 0 1.148.22 1.588.66.441.441.662.971.662 1.59v7.875c0 .619-.22 1.149-.662 1.59-.44.44-.97.66-1.588.66ZM12 21c-.619 0-1.148-.22-1.588-.66a2.167 2.167 0 0 1-.662-1.59V5.25c0-.619.22-1.148.662-1.588C10.851 3.22 11.382 3 12 3c.619 0 1.149.22 1.59.662.44.44.66.97.66 1.588v13.5a2.17 2.17 0 0 1-.66 1.59c-.441.44-.971.66-1.59.66Zm6.75 0a2.17 2.17 0 0 1-1.59-.66 2.17 2.17 0 0 1-.66-1.59v-3.375c0-.619.22-1.149.66-1.59.441-.44.971-.66 1.59-.66.619 0 1.149.22 1.59.66.44.441.66.971.66 1.59v3.375a2.17 2.17 0 0 1-.66 1.59c-.441.44-.971.66-1.59.66Z" />
  </svg>
);
SvgGraph.displayName = 'SvgGraph';
const GraphIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgGraph {...props} className={createClass(getIconStyles(props))} />
    )}
  </ClassNames>
);
GraphIcon.displayName = 'GraphIcon';
export default GraphIcon;
