// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/rocket.react.svg
import { useMemo } from 'react';
import { createSequentialId } from '@commercetools-uikit/utils';
/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Theme } from '@emotion/react';
import { warning } from '@commercetools-uikit/utils';
import { css, ClassNames, useTheme } from '@emotion/react';
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

const getColor = (color: Props['color'], theme: Theme) => {
  if (!color) return 'inherit';
  const overwrittenVars = { ...vars, ...theme };
  let iconColor;

  switch (color) {
    case 'solid':
      iconColor = overwrittenVars.colorSolid;
      break;

    case 'neutral60':
      iconColor = overwrittenVars.colorNeutral60;
      break;

    case 'surface':
      iconColor = overwrittenVars.colorSurface;
      break;

    case 'info':
      iconColor = overwrittenVars.colorInfo;
      break;

    case 'primary':
      iconColor = overwrittenVars.colorPrimary;
      break;

    case 'primary40':
      iconColor = overwrittenVars.colorPrimary40;
      break;

    case 'warning':
      iconColor = overwrittenVars.colorWarning;
      break;

    case 'error':
      iconColor = overwrittenVars.colorError;
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

export const getIconStyles = (props: Props, theme: Theme) => css`
  *:not([fill='none']) {
    fill: ${getColor(props.color, theme)};
  }
  &,
  image {
    ${getSizeStyle(props.size)};
  }
  flex-shrink: 0;
`;

const SvgRocket = ({ titleId, title, ...props }: SVGProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fillRule="evenodd">
      <g fill="#1A1A1A" fillRule="nonzero">
        <path d="M20.539 3.068a9.168 9.168 0 0 0-4.084.427 9.17 9.17 0 0 0-3.482 2.174l-2.29 2.29-.044.005-3.257.42a.207.207 0 0 0-.12.058l-3.14 3.141a.205.205 0 0 0 .108.347l2.415.448.622.622-.157.085-.993.538a.206.206 0 0 0-.047.326l3.767 3.767a.206.206 0 0 0 .325-.048l.623-1.15.622.622.008.04.44 2.375a.205.205 0 0 0 .347.108l3.14-3.14a.205.205 0 0 0 .06-.12l.425-3.302.032-.032 2.257-2.257a9.173 9.173 0 0 0 2.175-3.482 9.172 9.172 0 0 0 .426-4.083.205.205 0 0 0-.178-.179ZM7.523 16.326a.405.405 0 0 1 0 .574l-2.905 2.905a.404.404 0 1 1-.573-.573l2.905-2.906a.405.405 0 0 1 .573 0ZM8.449 17.252a.405.405 0 0 1 0 .573l-1.31 1.31a.405.405 0 1 1-.572-.574l1.308-1.309a.405.405 0 0 1 .574 0ZM5 16.997a.406.406 0 0 1 0 .573l-1.308 1.309a.404.404 0 0 1-.573 0 .405.405 0 0 1 0-.573l1.308-1.31a.406.406 0 0 1 .574 0ZM6.065 16.62a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.598 19.684a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
      </g>
    </g>
  </svg>
);

SvgRocket.displayName = 'SvgRocket';
const titleSequentialId = createSequentialId('rocket-icon-title-');

const RocketIcon = (props: Props) => {
  const theme = useTheme();
  const svgTitleId = useMemo(() => titleSequentialId(), []);
  return (
    <ClassNames>
      {({ css: createClass }) => (
        <SvgRocket
          {...props}
          titleId={svgTitleId}
          title="Rocket icon"
          className={createClass(getIconStyles(props, theme))}
        />
      )}
    </ClassNames>
  );
};

RocketIcon.displayName = 'RocketIcon';
export default RocketIcon;
