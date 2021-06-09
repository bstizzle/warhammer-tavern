const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '@gold-6',
              '@heading-color': '@red-5',
              '@descriptions-bg': '#1f1f1f',
              '@spin-dot-size-lg': '100px',
           },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};