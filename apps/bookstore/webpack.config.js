const path = require('path');
const getBabelWebpackConfig = require('@nrwl/react/plugins/babel');
const cssModuleRegex = /\.module\.css$/;

const CSS_MODULE_LOCAL_IDENT_NAME = '[local]___[hash:base64:5]';

module.exports = (config, context) => {
  if (process.env.STANDALONE === 'false') {
    console.log(
      '---------------------externals: react-------------------------'
    );
    config.externals = {
      react: 'react'
    };
  }

  config = getBabelWebpackConfig(config);

  config.module.rules.forEach((rule, idx) => {
    // Find rule tests for CSS.
    // Then make sure it excludes .module.css files.
    if (rule.test.test('foo.css')) {
      rule.exclude = rule.exclude
        ? Array.isArray(rule.exclude)
          ? [...rule.exclude, cssModuleRegex]
          : [rule.exclude, cssModuleRegex]
        : cssModuleRegex;
    }
  });

  // Add new rule to handle .module.css files by using css-loader
  // with modules on.
  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-modules-typescript-loader' },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1
        }
      }
    ]
  });

  return config;
};
