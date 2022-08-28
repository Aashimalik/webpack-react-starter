const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DIST = path.resolve(__dirname, "dist");
const SRC = path.resolve(__dirname, "src");

module.exports = {
  target: "web",
  devServer: {
    port: 3010,
  },
  optimization: {
    usedExports: true,
  },
  entry: {
    index: `${SRC}/index.js`,
  },
  output: {
    path: DIST,
    filename: "index.bundle.js",
    chunkFilename: "[id].js",
    publicPath: "",
  },
  resolve: {
    // modules: ['src', 'node_modules'],
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|otf|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000,
              name: "assets/img/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/public/index.html`,
      filename: "index.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin(),
  ],
};
