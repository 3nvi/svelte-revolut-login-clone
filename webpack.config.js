const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const isProduction = mode === 'production';

module.exports = {
  entry: {
    bundle: ['./src/main.js'],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'src')],
    extensions: ['.mjs', '.js', '.svelte'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          /**
           * MiniCssExtractPlugin doesn't support HMR.
           * For developing, use 'style-loader' instead.
           * */
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$/,
        use: 'file-loader?name=[name].[ext]?[hash]',
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        options: {
          removeSVGTagAttrs: false,
        },
      },
    ],
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devtool: isProduction ? false : 'source-map',
};
