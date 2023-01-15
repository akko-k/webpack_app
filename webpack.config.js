const HtmlWebpackPlugin = require("html-webpack-plugin");
/** ↓ エディタで補完を効かせるための JSDoc */
/** @type {import('webpack').Configuration} */
module.exports = {
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  entry: "./src/main.jsx",
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  module: {
    rules: [
      {
        // 拡張子 js のファイル（正規表現）
        test: /\.jsx$/,
        // ローダーの指定
        loader: "babel-loader",
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // プラグインのインスタンスを作成
    new HtmlWebpackPlugin({
      // テンプレート
      template: "./src/index.html",
      // <script> ~ </script> タグの挿入位置
      inject: "body",
      // スクリプト読み込みのタイプ
      scriptLoading: "defer",
      // ファビコンも <link rel="shortcut icon" ~ /> として挿入できる
      // favicon: "./src/favicon.ico",
    }),
  ],
};
