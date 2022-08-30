// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/support.react.svg
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

const SvgSupport = ({ titleId, title, ...props }: SVGProps) => (
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
      d="M14.7 10.732c-.26.389-.614.72-1.054.986-.409.241-.688.47-.83.682-.14.206-.21.478-.21.808v.54h-1.383v-.72c-.004-.462.11-.867.34-1.205.226-.333.58-.643 1.051-.922.373-.227.641-.458.797-.685.152-.222.23-.504.23-.838 0-.388-.135-.7-.412-.953-.275-.253-.653-.381-1.123-.381-.475 0-.86.132-1.145.39-.283.26-.444.618-.478 1.066l-.007.097H9.122l.006-.11c.037-.746.309-1.389.81-1.91.502-.523 1.247-.788 2.214-.788.866 0 1.58.242 2.122.719.546.48.823 1.09.823 1.81 0 .545-.134 1.021-.396 1.414Zm-1.954 5.83a1.001 1.001 0 0 1-.74.293c-.3 0-.551-.098-.745-.292a1.012 1.012 0 0 1-.292-.744c0-.304.098-.557.292-.75.194-.195.444-.293.744-.293s.55.099.741.293c.192.193.289.446.289.75 0 .3-.097.55-.289.744ZM12 3a9 9 0 0 0-7.619 13.793l-1.046 3.906 3.92-1.05A9 9 0 0 0 21 12a9 9 0 0 0-9-9Z"
      fillRule="evenodd"
    />
  </svg>
);

SvgSupport.displayName = 'SvgSupport';
const titleSequentialId = createSequentialId('support-icon-title-');

const SupportIcon = (props: Props) => {
  const theme = useTheme();
  const svgTitleId = useMemo(() => titleSequentialId(), []);
  return (
    <ClassNames>
      {({ css: createClass }) => (
        <SvgSupport
          {...props}
          titleId={svgTitleId}
          title="Support icon"
          className={createClass(getIconStyles(props, theme))}
        />
      )}
    </ClassNames>
  );
};

SupportIcon.displayName = 'SupportIcon';
export default SupportIcon;
