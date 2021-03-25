const webpack = require('webpack');
const path = require('path');
const config1 = {
  entry: './Lab1/src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    path: path.resolve(__dirname, 'Lab1/dist'),
    filename: 'index.js'
  }
};
const config2 = {
  entry: './Lab2/src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    path: path.resolve(__dirname, 'Lab2/dist'),
    filename: 'index.js'
  }
};
const config3 = {
  entry: './Lab3/src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    path: path.resolve(__dirname, 'Lab3/dist'),
    filename: 'index.js'
  }
};
// module.exports = [config1, config2, config3];
module.exports = config3;