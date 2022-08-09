// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/information.react.svg

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

const SvgInformation = (props: SVGProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.856 4.773a1.932 1.932 0 1 1 0 3.863 1.932 1.932 0 0 1 0-3.863Zm3.112 14.81H9.173a.966.966 0 1 1 0-1.932h.966v-5.795h-.966a.966.966 0 1 1 0-1.932h3.864c.533 0 .966.433.966.966v6.761h.965a.966.966 0 0 1 0 1.932Z"
      fillRule="evenodd"
    />
  </svg>
);

SvgInformation.displayName = 'SvgInformation';

const InformationIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgInformation
        {...props}
        className={createClass(getIconStyles(props))}
      />
    )}
  </ClassNames>
);

InformationIcon.displayName = 'InformationIcon';
export default InformationIcon;
