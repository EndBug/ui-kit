import React from 'react';
import { getIconStyles, iconPropTypes } from '../create-styled-icon';
import Eye from '../raw-components/eye';

const Component = props => (
  <Eye {...props} css={theme => getIconStyles(props, theme)} />
);

Component.displayName = 'EyeIcon';

// we do this to enable treeshaking
// please see https://github.com/alex996/react-css-spinners/issues/1
if (process.env.NODE_ENV !== 'production') {
  Component.propTypes = iconPropTypes;
}

export default Component;
