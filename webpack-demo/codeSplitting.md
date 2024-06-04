# Code Splitting in Webpack

Code splitting is a technique used in Webpack to split your code into smaller bundles, improving the performance of your application by loading only the necessary parts of code as required.

## How it Works

Webpack allows you to split your code into multiple bundles based on entry points or dynamically loaded modules. This is achieved through the `optimization.splitChunks` configuration option.

```javascript
// webpack.config.js

module.exports = {
  // Other webpack configuration options...
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
```

In this configuration, `chunks: 'all'` tells Webpack to split code from both your application code and any third-party libraries.

## Example Usage

```javascript
// index.js

import(/* webpackChunkName: "module" */ './module.js')
  .then(module => {
    module.default();
  })
  .catch(error => {
    console.error('Failed to load module', error);
  });
```

In this example, the `import()` function is used to dynamically import the `module.js` file. This creates a separate chunk for `module.js` which is loaded asynchronously when needed.

## Benefits

- **Reduced Initial Loading Time**: Only necessary code is loaded initially, improving the loading time of your application.
- **Improved Performance**: Smaller bundles mean faster downloads and parsing times.
- **Better Caching**: Cached assets can be more granular, reducing unnecessary re-downloads.
