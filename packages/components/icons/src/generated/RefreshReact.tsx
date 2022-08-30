// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/refresh.react.svg
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

const SvgRefresh = ({ titleId, title, ...props }: SVGProps) => (
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
      d="M18.257 5.329c-3.59-3.217-9.137-3.101-12.586.347-3.542 3.595-3.542 9.41.026 12.98a9.145 9.145 0 0 0 6.477 2.669 9.19 9.19 0 0 0 6.476-2.67 9.176 9.176 0 0 0 2.326-3.965 1.041 1.041 0 0 0-.74-1.295 1.041 1.041 0 0 0-1.295.74 7.006 7.006 0 0 1-1.798 3.04 7.052 7.052 0 0 1-9.965 0 7.052 7.052 0 0 1 0-9.965 7.053 7.053 0 0 1 9.567-.37l-1.153 1.153a.354.354 0 0 0-.101.285.445.445 0 0 0 .135.298.445.445 0 0 0 .298.134l4.075.234a.355.355 0 0 0 .285-.102.354.354 0 0 0 .102-.284l-.234-4.076a.445.445 0 0 0-.135-.298.445.445 0 0 0-.297-.135.354.354 0 0 0-.285.101L18.257 5.33Z"
      fillRule="nonzero"
    />
  </svg>
);

SvgRefresh.displayName = 'SvgRefresh';
const titleSequentialId = createSequentialId('refresh-icon-title-');

const RefreshIcon = (props: Props) => {
  const theme = useTheme();
  const svgTitleId = useMemo(() => titleSequentialId(), []);
  return (
    <ClassNames>
      {({ css: createClass }) => (
        <SvgRefresh
          {...props}
          titleId={svgTitleId}
          title="Refresh icon"
          className={createClass(getIconStyles(props, theme))}
        />
      )}
    </ClassNames>
  );
};

RefreshIcon.displayName = 'RefreshIcon';
export default RefreshIcon;
