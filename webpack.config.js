const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./rendered/index.tsx",
  output: {
    path: path.resolve(__dirname, "build/front"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.(svg)$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /.(ts|tsx|js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              ["@babel/plugin-transform-runtime"],
              [
                "module-resolver",
                {
                  alias: {
                    "@components": "./rendered/components",
                    "@assets": "./rendered/assets",
                    "@actions": "./rendered/actions",
                    "@reducers": "./rendered/reducers",
                    "@saga": "./rendered/saga",
                    "@services": "./rendered/services",
                  },
                },
              ],
            ],
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.ExternalsPlugin("commonjs", ["electron"]),
    new HtmlWebpackPlugin({
      title: "Gestão dental",
      template: path.resolve(__dirname, "template.html"),
    }),
  ],
};
