// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/connected-square.react.svg

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

const SvgConnectedSquare = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M7.8 4.6h6.5c.1 0 .2.2.2.4v1c0 .2-.1.4-.2.4H7.7c-.4.9-1.2 1.5-2.2 1.5C4.1 7.9 3 6.8 3 5.5S4.1 3 5.5 3c1 0 1.9.7 2.3 1.6zM4.6 16.3V9.8c0-.1.2-.2.4-.2h1c.2 0 .4.1.4.2v6.5c.9.4 1.4 1.2 1.4 2.2 0 1.4-1.1 2.5-2.5 2.5S3 19.9 3 18.6c0-1.1.7-2 1.6-2.3zm11.6 3H9.8c-.1 0-.2-.2-.2-.4v-1c0-.2.1-.4.2-.4h6.5c.4-.9 1.2-1.4 2.2-1.4 1.4 0 2.5 1.1 2.5 2.5S19.9 21 18.5 21c-1 0-1.9-.7-2.3-1.7zm3.2-11.5v6.5c0 .1-.2.2-.4.2h-1c-.2 0-.4-.1-.4-.2V7.7c-.9-.4-1.4-1.2-1.4-2.2 0-1.4 1.1-2.5 2.5-2.5S21 4.1 21 5.5c0 1-.7 1.9-1.6 2.3z" />
  </svg>
);

SvgConnectedSquare.displayName = 'SvgConnectedSquare';

const ConnectedSquareIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgConnectedSquare
        {...props}
        className={createClass(getIconStyles(props))}
      />
    )}
  </ClassNames>
);

ConnectedSquareIcon.displayName = 'ConnectedSquareIcon';
export default ConnectedSquareIcon;
