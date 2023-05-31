// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/rich-text-body/icons/svg/ordered-list.react.svg
import { warning, createSequentialId } from '@commercetools-uikit/utils';
import { useMemo } from 'react';
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
const SvgOrderedList = ({ titleId, title, ...props }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#1A1A1A"
      fillRule="evenodd"
      d="M4.42 16c.449 0 .803.102 1.063.306.26.204.39.488.39.852 0 .304-.082.562-.247.775a1.25 1.25 0 0 1-.69.439v.02c.35.049.614.168.794.358.18.19.27.445.27.766 0 .468-.151.833-.454 1.093-.302.26-.734.391-1.295.391-.47 0-.887-.088-1.251-.263v-.875c.168.096.353.173.554.233.202.06.402.09.6.09.302 0 .525-.058.67-.173.143-.115.216-.3.216-.556 0-.228-.083-.39-.25-.485-.165-.096-.43-.143-.794-.143h-.329v-.789h.335c.336 0 .581-.05.737-.148.155-.098.232-.268.232-.507 0-.368-.205-.552-.616-.552-.143 0-.287.026-.435.08a2.04 2.04 0 0 0-.49.276l-.424-.709C3.4 16.159 3.873 16 4.42 16Zm16.33 1.962a.39.39 0 0 1 .176.037.145.145 0 0 1 .066.055l.008.033v.75c0 .033-.025.063-.074.088a.35.35 0 0 1-.111.032l-.065.005h-10.5a.389.389 0 0 1-.176-.037.144.144 0 0 1-.066-.056L10 18.837v-.75c0-.034.025-.064.074-.088a.352.352 0 0 1 .111-.033l.065-.004h10.5ZM4.526 9c.267 0 .503.056.708.169.205.112.363.27.477.472a1.4 1.4 0 0 1 .17.694c0 .227-.035.44-.105.639-.069.199-.176.403-.321.612-.146.209-.401.507-.768.893l-.55.597v.047H6V14H3.012v-.725l1.073-1.25c.318-.376.525-.636.623-.781.097-.145.167-.28.21-.403.043-.124.064-.252.064-.384 0-.198-.047-.346-.141-.442a.506.506 0 0 0-.379-.145.972.972 0 0 0-.482.131 2.493 2.493 0 0 0-.489.375L3 9.705c.21-.207.385-.353.523-.439.139-.085.29-.15.454-.197.163-.046.347-.069.55-.069Zm16.224 2.5a.39.39 0 0 1 .176.037.145.145 0 0 1 .066.056l.008.032v.75c0 .034-.025.063-.074.088a.352.352 0 0 1-.111.033l-.065.004h-10.5a.39.39 0 0 1-.176-.037.145.145 0 0 1-.066-.056L10 12.375v-.75c0-.034.025-.063.074-.088a.35.35 0 0 1 .111-.033l.065-.004h10.5ZM5 3v4h-.852V4.685l.008-.38.014-.416a4.47 4.47 0 0 1-.296.277l-.463.369L3 4.026 4.3 3H5Zm15.75 2.038a.39.39 0 0 1 .176.038.145.145 0 0 1 .066.055l.008.032v.75c0 .034-.025.064-.074.088a.35.35 0 0 1-.111.033l-.065.004h-10.5a.388.388 0 0 1-.176-.037.145.145 0 0 1-.066-.055L10 5.913v-.75c0-.033.025-.063.074-.087a.35.35 0 0 1 .111-.033l.065-.005h10.5Z"
    />
  </svg>
);
SvgOrderedList.displayName = 'SvgOrderedList';
const titleSequentialId = createSequentialId('ordered-list-icon-title-');
const OrderedListIcon = (props: Props) => {
  const svgTitleId = useMemo(() => titleSequentialId(), []);
  return (
    <ClassNames>
      {({ css: createClass }) => (
        <SvgOrderedList
          {...props}
          titleId={svgTitleId}
          title="Ordered list icon"
          className={createClass(getIconStyles(props))}
        />
      )}
    </ClassNames>
  );
};
OrderedListIcon.displayName = 'OrderedListIcon';
export default OrderedListIcon;
