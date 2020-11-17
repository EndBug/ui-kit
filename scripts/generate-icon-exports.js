const fs = require('fs');
const path = require('path');
const glob = require('glob');
const shelljs = require('shelljs');
const svgr = require('@svgr/core').default;
const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/upperFirst');
const { stripIndents } = require('common-tags');
const prettier = require('prettier');
const rcfile = require('rcfile');

const iconFileExt = '.react.svg';
const prettierConfig = rcfile('prettier');

// TODO: move the script into a generator package
const createIconPaths = (rootPath) => ({
  svgPath: path.join(__dirname, '..', rootPath, 'svg/*.svg'),
  rawExportsPath: path.join(__dirname, '..', rootPath, 'raw-components/'),
  iconComponentsPath: path.join(__dirname, '..', rootPath, 'components/'),
  indexPath: path.join(__dirname, '..', rootPath, 'index.js'),
  createStyledIconPath: path.join(
    __dirname,
    '..',
    rootPath,
    'create-styled-icon.js'
  ),
});

const publicIconsPaths = createIconPaths('packages/components/icons/src');
const richTextIconsPaths = createIconPaths(
  'packages/components/inputs/rich-text-utils/src/rich-text-body/icons'
);
const radioGroupIconsPaths = createIconPaths(
  'packages/components/inputs/radio-input/src/icons'
);
const checkboxIconsPaths = createIconPaths(
  'packages/components/inputs/checkbox-input/src/icons'
);

const createStyledIconPath = path.join(__dirname, 'create-styled-icon.js');

const iconsToProcess = [
  publicIconsPaths,
  richTextIconsPaths,
  radioGroupIconsPaths,
  checkboxIconsPaths,
];

iconsToProcess.forEach((iconPaths) => {
  shelljs.exec(
    `rm -rf ${iconPaths.rawExportsPath} ${iconPaths.iconComponentsPath}`
  );
  shelljs.exec(
    `mkdir ${iconPaths.rawExportsPath} ${iconPaths.iconComponentsPath}`
  );
  // Copy the `create-styled-icon.js` into each package.
  shelljs.exec(`cp ${createStyledIconPath} ${iconPaths.createStyledIconPath}`);
});

const autogeneratedComment = `
/*
  THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

  This file is created by the 'scripts/generate-icon-exports.js' script.
*/
`;

iconsToProcess.forEach((data) => {
  glob(data.svgPath, async (err, files) => {
    const createStyledIconImportPath = path
      .relative(data.iconComponentsPath, data.createStyledIconPath)
      .replace(/\.js$/, '');

    files.forEach((fileName) => {
      const fileNameWithoutExtension = path.basename(fileName, iconFileExt);
      const componentName = upperFirst(camelCase(fileNameWithoutExtension));

      const svgCode = fs.readFileSync(fileName, 'UTF-8');
      const jsCode = svgr.sync(
        svgCode,
        {
          icon: false,
          svgoConfig: {
            plugins: [
              { removeViewBox: false },
              { prefixIds: true },
              // same result as rollup plugin
              { prefixIds: { prefix: fileNameWithoutExtension } },

              // Keeps ID's of svgs so they can be targeted with CSS
              { cleanupIDs: false },
            ],
          },
          // same as the rollup plugin
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        },
        { componentName }
      );

      fs.writeFileSync(
        path.join(data.rawExportsPath, `/${fileNameWithoutExtension}.js`),
        prettier.format(jsCode, prettierConfig)
      );

      const displayName = `${componentName}Icon`;

      const importStatement = stripIndents`
        ${autogeneratedComment}
        import React from 'react';
        import { useTheme } from 'emotion-theming';
        import { getIconStyles, iconPropTypes } from '${createStyledIconImportPath}';
        import ${componentName} from '../raw-components/${fileNameWithoutExtension}';

        const Component = props => {
          const theme = useTheme();
          return <${componentName} {...props} css={getIconStyles(props, theme)} />
        };

        Component.displayName = '${displayName}';

        // we do this to enable treeshaking
        // please see https://github.com/alex996/react-css-spinners/issues/1
        if (process.env.NODE_ENV !== "production") {
          Component.propTypes = iconPropTypes;
        }

        export default Component;
      `;

      fs.writeFileSync(
        path.join(data.iconComponentsPath, `/${fileNameWithoutExtension}.js`),
        prettier.format(importStatement, prettierConfig)
      );
    });

    const importStatements = files.reduce((importsString, fileName) => {
      const fileNameWithoutExtension = path.basename(fileName, iconFileExt);
      const componentName = upperFirst(camelCase(fileNameWithoutExtension));

      return stripIndents`
        ${importsString}
        export { default as ${componentName}Icon } from './components/${fileNameWithoutExtension}';
      `;
    }, '');

    const iconsFile = `
      ${autogeneratedComment}
      ${importStatements}
    `;

    fs.writeFileSync(
      data.indexPath,
      prettier.format(iconsFile, prettierConfig)
    );
  });
});
