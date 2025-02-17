// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/chain-broken.react.svg
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
const SvgChainBroken = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="m15.49 11.721-1.784-1.784h1.785c.252 0 .465.085.636.256.17.171.256.383.256.636a.863.863 0 0 1-.256.635.864.864 0 0 1-.636.257Zm3.057 3.078-1.339-1.383c.58-.163 1.06-.48 1.44-.948a2.528 2.528 0 0 0 .568-1.639c0-.744-.26-1.375-.781-1.896a2.581 2.581 0 0 0-1.896-.78h-2.677a.861.861 0 0 1-.635-.258.861.861 0 0 1-.257-.635c0-.253.086-.465.257-.636a.863.863 0 0 1 .636-.256h2.676c1.234 0 2.286.428 3.157 1.283.87.855 1.304 1.914 1.304 3.178 0 .848-.223 1.632-.67 2.353a4.203 4.203 0 0 1-1.783 1.617Zm-.134 4.863L3.245 4.494A.846.846 0 0 1 3 3.87c0-.253.082-.461.245-.625A.846.846 0 0 1 3.87 3c.253 0 .46.082.624.245l15.168 15.168a.846.846 0 0 1 .245.624c0 .253-.082.461-.245.625a.846.846 0 0 1-.625.245.846.846 0 0 1-.624-.245Zm-8.12-4.372H7.618c-1.234 0-2.286-.435-3.156-1.305-.87-.87-1.305-1.922-1.305-3.156 0-1.04.316-1.96.948-2.755a4.423 4.423 0 0 1 2.398-1.572l1.65 1.65h-.535c-.743 0-1.375.26-1.896.781-.52.52-.78 1.152-.78 1.896 0 .743.26 1.375.78 1.896.52.52 1.153.78 1.896.78h2.677c.252 0 .464.086.636.257.17.17.256.383.256.636a.863.863 0 0 1-.256.635.864.864 0 0 1-.636.257Zm1.428-3.569H8.665a.861.861 0 0 1-.635-.257.86.86 0 0 1-.257-.635c0-.253.086-.465.257-.636a.863.863 0 0 1 .635-.256H9.96l1.762 1.784Z" />
  </svg>
);
SvgChainBroken.displayName = 'SvgChainBroken';
const ChainBrokenIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgChainBroken
        {...props}
        className={createClass(getIconStyles(props))}
      />
    )}
  </ClassNames>
);
ChainBrokenIcon.displayName = 'ChainBrokenIcon';
export default ChainBrokenIcon;
