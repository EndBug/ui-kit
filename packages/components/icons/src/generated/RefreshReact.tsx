// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'pnpm generate-icons'.
// Original SVG file: src/svg/refresh.react.svg
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
const SvgRefresh = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M12 21c-2.512 0-4.64-.872-6.384-2.616C3.872 16.641 3 14.512 3 12c0-2.512.872-4.64 2.616-6.384C7.359 3.872 9.488 3 12 3c1.294 0 2.531.267 3.713.802a8.57 8.57 0 0 1 3.037 2.292V4.125c0-.319.108-.586.324-.802.215-.215.482-.323.801-.323.319 0 .586.108.801.323.216.216.324.483.324.802V9.75c0 .319-.108.586-.324.801a1.086 1.086 0 0 1-.801.324H14.25c-.319 0-.586-.108-.801-.324a1.086 1.086 0 0 1-.324-.801c0-.319.108-.586.324-.802.215-.215.482-.323.801-.323h3.6a6.567 6.567 0 0 0-2.46-2.475c-1.041-.6-2.171-.9-3.39-.9-1.875 0-3.469.656-4.781 1.969C5.906 8.53 5.25 10.125 5.25 12c0 1.875.656 3.469 1.969 4.781C8.53 18.094 10.125 18.75 12 18.75c1.294 0 2.49-.342 3.586-1.027a6.43 6.43 0 0 0 2.46-2.742c.095-.206.25-.38.466-.52.215-.14.435-.211.66-.211.431 0 .755.15.97.45.216.3.24.638.07 1.013a8.77 8.77 0 0 1-3.29 3.838C15.44 20.517 13.8 21 12 21Z" />
  </svg>
);
SvgRefresh.displayName = 'SvgRefresh';
const RefreshIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgRefresh {...props} className={createClass(getIconStyles(props))} />
    )}
  </ClassNames>
);
RefreshIcon.displayName = 'RefreshIcon';
export default RefreshIcon;
