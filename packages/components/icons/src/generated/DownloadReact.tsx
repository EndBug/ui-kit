// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/download.react.svg
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
const SvgDownload = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M12 16.022c-.15 0-.29-.024-.422-.071a.98.98 0 0 1-.365-.239l-4.05-4.05a1.067 1.067 0 0 1-.31-.787c0-.319.103-.581.31-.787.206-.207.473-.315.8-.324.329-.01.596.09.803.295l2.109 2.11V4.125c0-.319.108-.586.324-.802.215-.215.482-.323.801-.323.319 0 .586.108.802.323.215.216.323.483.323.802v8.044l2.11-2.11c.206-.206.473-.304.802-.295.327.01.594.117.8.324.207.206.31.468.31.787s-.103.581-.31.787l-4.05 4.05a.98.98 0 0 1-.365.239c-.131.047-.272.07-.422.07ZM5.25 21c-.619 0-1.148-.22-1.588-.66A2.167 2.167 0 0 1 3 18.75V16.5c0-.319.108-.586.323-.802.216-.215.483-.323.802-.323.319 0 .586.108.802.323.215.216.323.483.323.802v2.25h13.5V16.5c0-.319.108-.586.324-.802.215-.215.482-.323.801-.323.319 0 .586.108.801.323.216.216.324.483.324.802v2.25a2.17 2.17 0 0 1-.66 1.59c-.441.44-.971.66-1.59.66H5.25Z" />
  </svg>
);
SvgDownload.displayName = 'SvgDownload';
const DownloadIcon = (props: Props) => (
  <ClassNames>
    {({ css: createClass }) => (
      <SvgDownload {...props} className={createClass(getIconStyles(props))} />
    )}
  </ClassNames>
);
DownloadIcon.displayName = 'DownloadIcon';
export default DownloadIcon;
