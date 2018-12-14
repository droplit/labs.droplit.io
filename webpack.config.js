const path = require('path');
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, './dist/'),
        publicPath: '',
        filename: 'build.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '',
        watchContentBase: true,
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {}
        },
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                transpileOnly: true,
                appendTsSuffixTo: [/\.vue$/],
            }
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]',
                outputPath: 'assets/'
            }
        },
        {
            test: /\.(scss|css)$/,
            use: [
                'vue-style-loader',
                {
                    loader: "css-loader", options: {
                        sourceMap: true,
                        includePaths: [
                            'node_modules'
                        ]
                    }
                },
                {
                    loader: "sass-loader", options: {
                        sourceMap: true,
                        includePaths: [
                            'node_modules'
                        ]
                    }
                }
            ]
        }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
    },
    performance: {
        hints: false
    },
    devtool: 'inline-source-map',
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'src/assets',
                to: 'assets'
            }
        ]),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]);
}