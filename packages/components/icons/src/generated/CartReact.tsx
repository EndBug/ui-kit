// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/cart.react.svg
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
const SvgCart = ({ titleId, title, ...props }: SVGProps) => (
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
    <path d="M8.436 21c-.49 0-.91-.174-1.259-.523a1.717 1.717 0 0 1-.524-1.26c0-.49.175-.909.524-1.257.35-.35.769-.524 1.259-.524.49 0 .91.174 1.258.524.35.348.524.768.524 1.258s-.175.91-.524 1.259A1.715 1.715 0 0 1 8.436 21Zm8.91 0c-.49 0-.909-.174-1.258-.523a1.717 1.717 0 0 1-.524-1.26c0-.49.175-.909.524-1.257.349-.35.768-.524 1.258-.524s.91.174 1.26.524c.348.348.523.768.523 1.258s-.175.91-.523 1.259c-.35.349-.77.523-1.26.523ZM7.812 6.743l2.005 4.21h6.238l2.294-4.21H7.812Zm.624 9.802c-.713 0-1.248-.309-1.604-.925-.357-.616-.364-1.229-.023-1.838l1.181-2.138L4.827 4.96h-.87a.922.922 0 0 1-.678-.279.95.95 0 0 1-.279-.7A.952.952 0 0 1 3.98 3h1.426c.178 0 .353.052.524.156.17.104.3.252.39.445l.556 1.181H19.82c.505 0 .84.171 1.003.513.163.341.148.712-.045 1.113l-3.052 5.503a1.798 1.798 0 0 1-.668.723 1.812 1.812 0 0 1-.958.257H9.505l-.936 1.693h9.69c.268 0 .495.093.68.28a.95.95 0 0 1 .279.7.954.954 0 0 1-.278.703.953.953 0 0 1-.702.278H8.436Zm1.38-5.592h6.239-6.238Z" />
  </svg>
);
SvgCart.displayName = 'SvgCart';
const titleSequentialId = createSequentialId('cart-icon-title-');
const CartIcon = (props: Props) => {
  const svgTitleId = useMemo(() => titleSequentialId(), []);
  return (
    <ClassNames>
      {({ css: createClass }) => (
        <SvgCart
          {...props}
          titleId={svgTitleId}
          title="Cart icon"
          className={createClass(getIconStyles(props))}
        />
      )}
    </ClassNames>
  );
};
CartIcon.displayName = 'CartIcon';
export default CartIcon;
