/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



const js = {
  test: /\(.js|.jsx?$/,
  loader: require.resolve("babel-loader"),
  exclude: [/node_modules/]
};

const scss = {
  test: /\.(sc|c)ss$/,
  use: [
    MiniCssExtractPlugin.loader,
    { loader: 'css-loader', options: { importLoaders: 1 } },
    'postcss-loader',
    'sass-loader',
  ]
};

const imgs = {
  test: /\.(jpeg|jpg|png|gif|webp|svg)$/i,
  use: [{
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'images/',
      esModule: false
    }
  }]
};

const etc = {
  loader: require.resolve("file-loader"),
  exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/, /\.(sc|c)ss$/],
  options: {
    name: "static/media/[name].[hash:8].[ext]",
    esModule: false // fix problem with img [object Module] in browser
  }
};


module.exports = {
  context: path.resolve(__dirname),
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.js"],
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
    chunkFilename: "[name].bundle.js",
    publicPath: "/"
  },
  devServer: {
    port: 6801,
    open: true,
    hot: true,
    watchContentBase: true,
    progress: true,
    contentBase: path.join(__dirname, "dist"),
    writeToDisk: true,
    overlay: true,
    historyApiFallback: true // on 404 load publicPath => for BrowserRouter on refresh
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
    modules: ["node_modules"],
    "alias": {
      "react": "preact/compat",
      "react-dom": "preact/compat",
      "@src": path.resolve(__dirname, "/src")
    },
  },
  module: {
    rules: [js, scss, imgs, etc]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "assets", "index.html"),
      title: "ChangeME",
    }),
    new MiniCssExtractPlugin()
  ]
};
