// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'pnpm generate-icons'.
// Original SVG file: src/svg/fraction-digits.react.svg
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
const SvgFractionDigits = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <g fillRule="evenodd">
      <path
        fill="#1A1A1A"
        fillRule="nonzero"
        d="M4.686 11.162c0-.328.087-.576.263-.744.176-.168.432-.252.768-.252.324 0 .575.086.753.258.177.172.266.418.266.738 0 .309-.09.552-.27.73-.179.177-.429.266-.75.266-.327 0-.581-.087-.76-.26-.18-.174-.27-.42-.27-.736Zm9.158-3.445c0 1.496-.245 2.603-.736 3.322-.49.719-1.245 1.078-2.264 1.078-.989 0-1.734-.37-2.236-1.113-.502-.742-.753-1.838-.753-3.287 0-1.512.245-2.626.733-3.343.488-.717 1.24-1.075 2.256-1.075.988 0 1.735.375 2.241 1.125s.759 1.847.759 3.293Zm-4.19 0c0 1.05.091 1.804.273 2.259.181.455.487.682.917.682.422 0 .726-.23.914-.691.187-.461.281-1.211.281-2.25 0-1.051-.095-1.806-.284-2.265-.19-.459-.493-.688-.911-.688-.426 0-.73.23-.914.688-.184.46-.276 1.214-.276 2.265Zm11.04 0c0 1.496-.246 2.603-.736 3.322-.49.719-1.245 1.078-2.265 1.078-.988 0-1.733-.37-2.235-1.113-.502-.742-.753-1.838-.753-3.287 0-1.512.244-2.626.732-3.343.489-.717 1.24-1.075 2.256-1.075.989 0 1.736.375 2.242 1.125.505.75.758 1.847.758 3.293Zm-4.19 0c0 1.05.09 1.804.272 2.259.182.455.488.682.917.682.422 0 .727-.23.914-.691.188-.461.282-1.211.282-2.25 0-1.051-.095-1.806-.285-2.265-.189-.459-.493-.688-.91-.688-.426 0-.731.23-.915.688-.183.46-.275 1.214-.275 2.265Z"
      />
      <g fill="#1A1A1A" fillRule="nonzero">
        <path d="m7.002 18.017-.004-2 10.5-.019.004 2z" />
        <path d="M16.945 13.581v6.869l4.145-3.466z" />
      </g>
    </g>
  </svg>
);
SvgFractionDigits.displayName = 'SvgFractionDigits';
const FractionDigitsIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgFractionDigits
        {...props}
        className={createClass(getIconStyles(props))}
      />
    )}
  </ClassNames>
);
FractionDigitsIcon.displayName = 'FractionDigitsIcon';
export default FractionDigitsIcon;
