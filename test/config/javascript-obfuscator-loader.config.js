'use strict';

const path = require('path');

module.exports = {
    entry: {
        'index': './test/input/index.js',
        'index-excluded': './test/input/index-excluded.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'post',
                exclude: [
                    path.resolve(__dirname, '../input/index-excluded')
                ],
                use: {
                    loader: path.resolve(__dirname, '../../dist/loader'),
                    options: {
                        disableConsoleOutput: false,
                        sourceMap: true,
                        sourceMapMode: 'separate',
                        stringArray: true,
                        stringArrayThreshold: 1
                    }
                }
            }
        ]
    },
    devtool: 'source-map',
    target: 'web',
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: __dirname + '/../output',
        filename: '[name].js'
    }
};