// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/chain-broken.react.svg

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

const SvgChainBroken = (props: SVGProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m9.892 16.62 2.297-2.297 1.332 1.332-2.297 2.298a3.385 3.385 0 0 1-2.4.992c-.87 0-1.74-.33-2.401-.992l-.573-.573a3.373 3.373 0 0 1-.995-2.401c0-.907.354-1.76.995-2.4l2.297-2.298 1.332 1.333-2.297 2.297a1.501 1.501 0 0 0-.442 1.068c0 .403.158.783.442 1.068l.573.573a1.513 1.513 0 0 0 2.137 0Zm1.653-7.072-1.332-1.333 2.297-2.297a3.373 3.373 0 0 1 2.4-.994c.907 0 1.76.353 2.401.994l.573.573c.641.641.995 1.494.995 2.4 0 .908-.354 1.76-.995 2.402l-2.297 2.297-1.332-1.333 2.297-2.297c.284-.285.442-.665.442-1.068 0-.404-.158-.783-.442-1.068l-.573-.573a1.5 1.5 0 0 0-1.068-.442c-.404 0-.783.157-1.069.442l-2.297 2.297ZM8.72 7.829l-.604.603-2.574-2.574.603-.604L8.719 7.83Zm.71-1.229V3h.771v3.6h-.771ZM3 10.2v-.771h3.6v.771H3Zm12.392 5.465.604-.603 2.574 2.574-.603.604-2.575-2.575Zm-1.85 5.078v-3.857h.772v3.857h-.771Zm3.6-6.686v-.771h3.6v.771h-3.6Z"
      fillRule="evenodd"
    />
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
