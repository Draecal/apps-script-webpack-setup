const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlwebpackInlineSourcePlugin = rquire("@effortlessmotion/html-webpack-inline-source-plugin");
const webpack = require('webpack');

module.exports = {
    target: 'web',
    entry: path.resolve(__dirname, "client.jsx"),
    output: {
        filename: "client.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "",
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            temnplate: path.join(__dirname, "/", "base.html"),
            filename: "client.html",
            inlineSource: ".(js|css)$",
        }),
        new HtmlwebpackInlineSourcePlugin(htmlWebpackPlugin),
        new webpack.Optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", {
                                targets: {"ie": "11","chrome":"70"},
                                modules: "commonjs",
                                loose: true,
                                bugfixes: true,
                                forceAllTransforms: true,
                            }],
                            ["@babel/preset-react", {runtime: "automatic",}]
                        ],
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {},
                        },
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                include: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack","svg-inline-loader"],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: ["base64-inline-loader"],
                type: "javascript/auto",
            },
        ],
    },
    resolve: {
        alias: {
            "parchment": path.resolve(__dirname, "node_modules/parchment"),
            "process/browser": require.resolve("process/browser"),
        },
        modules: [
            path.resolve(__dirname, "node_modules"),
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        fallback: {
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer/"),
            "path": require.resolve("path-browserify"),
            "process": require.resolve("process/browser"),
            "crypto": false,
            "fs": false,
        },
    }
};
