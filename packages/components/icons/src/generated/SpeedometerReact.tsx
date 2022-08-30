// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/speedometer.react.svg
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

const SvgSpeedometer = ({ titleId, title, ...props }: SVGProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M15.383 10.035a4.788 4.788 0 0 0-3.387-1.398 4.788 4.788 0 0 0-4.793 4.794c0 1.223.458 2.34 1.213 3.189.065.073 0 0 0 0s-.116.528-.507.918l-1.51 1.505c-.395.393-.842.565-1.008.391 0 0 .097.107 0 0a8.886 8.886 0 0 1-2.327-6.004c0-2.46.999-4.69 2.614-6.305a8.893 8.893 0 0 1 6.318-2.627 8.89 8.89 0 0 1 6.314 2.623l.01-.01c.824.822 1.488 1.801 1.944 2.89-.221.068-.44.142-.66.217l-3.353 1.01c-.23-.44-.52-.844-.87-1.192h.002Zm-3.36 2.405 3.748-.502-2.881 2.478c-.093.087-.361.239-.483.294a1.145 1.145 0 0 1-1.514-.581c-.258-.579 0-1.26.579-1.52.122-.053.424-.16.55-.169Zm8.089 4.724c.404-.917.67-1.911.76-2.96-1.38.005-2.76-.008-4.137-.104-.05.366-.143.719-.268 1.054a54.338 54.338 0 0 1 3.645 2.01Zm-3.1-3.629 3.922.028.002-.061c0-.981-.157-1.925-.435-2.811l-2.351.727c-.492.175-.99.336-1.495.462l-.123.038c.164.498.258 1.029.258 1.584l-.001.021c.074.006.148.008.222.012Zm-1.038 2.51c-.327.441-.279 1.117.102 1.505l1.542 1.568a.864.864 0 0 0 1.325-.075s.44-.482.843-1.214l-3.633-2.025-.179.241Z"
      fillRule="evenodd"
    />
  </svg>
);

SvgSpeedometer.displayName = 'SvgSpeedometer';
const titleSequentialId = createSequentialId('speedometer-icon-title-');

const SpeedometerIcon = (props: Props) => {
  const theme = useTheme();
  const svgTitleId = useMemo(() => titleSequentialId(), []);
  return (
    <ClassNames>
      {({ css: createClass }) => (
        <SvgSpeedometer
          {...props}
          titleId={svgTitleId}
          title="Speedometer icon"
          className={createClass(getIconStyles(props, theme))}
        />
      )}
    </ClassNames>
  );
};

SpeedometerIcon.displayName = 'SpeedometerIcon';
export default SpeedometerIcon;
