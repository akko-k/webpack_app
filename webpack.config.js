/** ↓ エディタで補完を効かせるための JSDoc */
/** @type {import('webpack').Configuration} */
module.exports = {
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
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
    ],
  },
};
