// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/review.react.svg
import { warning, createSequentialId } from '@commercetools-uikit/utils';
import { useMemo } from 'react';
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
  titleId: string;
  title?: string;
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
const SvgReview = ({ titleId, title, ...props }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m11.232 14.813-1.26-1.26a.934.934 0 0 0-.292-.203.82.82 0 0 0-.326-.067.9.9 0 0 0-.641.27.877.877 0 0 0-.27.641c0 .247.09.461.27.641l1.912 1.935c.09.09.188.154.293.19a.989.989 0 0 0 .337.057c.12 0 .232-.018.337-.056a.784.784 0 0 0 .293-.191l3.803-3.803c.18-.18.27-.397.27-.652a.889.889 0 0 0-.27-.652.889.889 0 0 0-.653-.27.889.889 0 0 0-.652.27l-3.15 3.15ZM6.8 21c-.495 0-.919-.176-1.27-.528A1.734 1.734 0 0 1 5 19.2V4.8c0-.495.176-.919.53-1.272A1.733 1.733 0 0 1 6.8 3h6.458a1.78 1.78 0 0 1 1.26.518l4.364 4.365a1.78 1.78 0 0 1 .517 1.26V19.2c.001.495-.175.919-.527 1.272A1.736 1.736 0 0 1 17.6 21H6.8Zm6.3-12.6V4.8H6.8v14.4h10.8V9.3H14a.869.869 0 0 1-.64-.26.869.869 0 0 1-.26-.64ZM6.8 4.8v4.5-4.5 14.4V4.8Z" />
  </svg>
);
SvgReview.displayName = 'SvgReview';
const titleSequentialId = createSequentialId('review-icon-title-');
const ReviewIcon = (props: Props) => {
  const svgTitleId = useMemo(() => titleSequentialId(), []);
  return (
    <ClassNames>
      {({ css: createClass }) => (
        <SvgReview
          {...props}
          titleId={svgTitleId}
          title="Review icon"
          className={createClass(getIconStyles(props))}
        />
      )}
    </ClassNames>
  );
};
ReviewIcon.displayName = 'ReviewIcon';
export default ReviewIcon;
