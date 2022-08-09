// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/screen-user.react.svg

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

const SvgScreenUser = (props: SVGProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.5 6.6H5.7v-.9h10.8v.9ZM3.9 14.7h2.7v.9H3.9a.9.9 0 0 1-.9-.9V3.9a.9.9 0 0 1 .9-.9h14.4a.9.9 0 0 1 .9.9v3.6h-.9V3.9H3.9v10.8Zm5.4-6.3H5.7v-.9h3.6v.9Zm4.95-.9a3.37 3.37 0 0 1 3.375 3.375 3.37 3.37 0 0 1-3.375 3.375 3.37 3.37 0 0 1-3.375-3.375A3.37 3.37 0 0 1 14.25 7.5ZM21 21H7.5v-1.125c0-2.25 4.5-3.488 6.75-3.488S21 17.625 21 19.875V21Z"
      fillRule="evenodd"
    />
  </svg>
);

SvgScreenUser.displayName = 'SvgScreenUser';

const ScreenUserIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgScreenUser {...props} className={createClass(getIconStyles(props))} />
    )}
  </ClassNames>
);

ScreenUserIcon.displayName = 'ScreenUserIcon';
export default ScreenUserIcon;
