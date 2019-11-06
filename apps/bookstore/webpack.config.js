const getBabelWebpackConfig = require('@nrwl/react/plugins/babel');

module.exports = (config, context) => {
  if (process.env.STANDALONE === 'false') {
    console.log(
      '---------------------externals: react-------------------------'
    );
    config.externals = {
      react: 'react'
    };
  }

  const cfg = getBabelWebpackConfig(config);

  return cfg;
};
