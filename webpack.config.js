const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const PATH_SOURCE = path.join(__dirname, "./src");
const PATH_DIST = path.join(__dirname, "./dist");

module.exports = env => {
    const environment = env.environment;
    const isProduction = environment === "production";
    const isDevelopment = environment === "development";
    console.log(isProduction, isDevelopment)

    return {
        mode: environment,

        devServer: {
            contentBase: PATH_DIST,
            host: "localhost",
            port: 8080,
            historyApiFallback: true,
            overlay: {
                errors: true,
                warnings: true
            }
        },
        entry: [path.join(PATH_SOURCE, "./index.js")],
        output: {
            path: PATH_DIST,
            filename: "js/[name].[hash].js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        debug: true,
                                        useBuiltIns: "usage",
                                        corejs: 3
                                    }
                                ],
                                "@babel/preset-react"
                            ]
                        }
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(PATH_SOURCE, "./index.html")
            }),

            new CleanWebpackPlugin()
        ]
    };
};
