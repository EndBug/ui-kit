// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/bin-linear.react.svg

/* eslint-disable @typescript-eslint/no-unused-vars */
import { warning } from '@commercetools-uikit/utils';
import { css, ClassNames } from '@emotion/react';
import { customProperties as vars } from '@commercetools-uikit/design-system';
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
      iconColor = vars.colorSolid;
      break;

    case 'neutral60':
      iconColor = vars.colorNeutral60;
      break;

    case 'surface':
      iconColor = vars.colorSurface;
      break;

    case 'info':
      iconColor = vars.colorInfo;
      break;

    case 'primary':
      iconColor = vars.colorPrimary;
      break;

    case 'primary40':
      iconColor = vars.colorPrimary40;
      break;

    case 'warning':
      iconColor = vars.colorWarning;
      break;

    case 'error':
      iconColor = vars.colorError;
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

const SvgBinLinear = (props: SVGProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.2 6.919V7.5H4V4.8h4.5V3h7.2v1.8h4.5v2.119Zm-.9-.319v-.9H4.9v.9h14.4ZM9.4 4.8h5.4v-.9H9.4v.9Zm8.1 2.7h.9l-.788 11.82A1.797 1.797 0 0 1 15.818 21H8.382a1.8 1.8 0 0 1-1.794-1.68L5.8 7.5h.9l.81 11.346A1.35 1.35 0 0 0 8.857 20.1h6.486a1.35 1.35 0 0 0 1.347-1.254L17.5 7.5Zm-4.95 9h-.9V9.3h.9v7.2Zm-2.25 0h-.9V9.3h.9v7.2Zm4.5 0h-.9V9.3h.9v7.2Z"
      fillRule="evenodd"
    />
  </svg>
);

SvgBinLinear.displayName = 'SvgBinLinear';

const BinLinearIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgBinLinear {...props} className={createClass(getIconStyles(props))} />
    )}
  </ClassNames>
);

BinLinearIcon.displayName = 'BinLinearIcon';
export default BinLinearIcon;
