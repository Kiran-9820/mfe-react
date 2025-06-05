const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const shouldAnalyze = env && env.analyze;
  return {
    mode: argv.mode || "development",
    entry: "./src/index.tsx",
    target: "web",
    devServer: {
      port: 3000,
      historyApiFallback: true,
      hot: true,
      liveReload: true,
      allowedHosts: 'all',
      static: {
        directory: './public',
        publicPath: '/',
        serveIndex: false,
      },
      devMiddleware: {
        index: true,
        publicPath: '/',
        writeToDisk: false,
      },
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "shell",
        remotes: {
          headerMfe: "headerMfe@http://localhost:3001/remoteEntry.js",
          productsMfe: "productsMfe@http://localhost:3002/remoteEntry.js",
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: "^19.1.0",
            eager: false,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: "^19.1.0",
            eager: false,
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      ...(shouldAnalyze ? [new BundleAnalyzerPlugin()] : []),
    ],
  };
};