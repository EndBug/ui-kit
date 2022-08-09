// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/clock.react.svg

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

const SvgClock = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M13.732 13A2 2 0 1 1 11 10.268V7a1 1 0 0 1 2 0v3.268c.304.175.557.428.732.732H15a1 1 0 0 1 0 2h-1.268ZM12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm0-2a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
    />
  </svg>
);

SvgClock.displayName = 'SvgClock';

const ClockIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgClock {...props} className={createClass(getIconStyles(props))} />
    )}
  </ClassNames>
);

ClockIcon.displayName = 'ClockIcon';
export default ClockIcon;
