const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
   watch: true,
   entry: ['./front-end/main.js', './front-end/scss/main.scss'],
	
   output: {
      path: __dirname,
      filename: './front-end/bundle.js',
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react', 'stage-0']
            }
         },
         {
             test: /\.scss$/,
             loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
         }
      ]
   },
   plugins: [
        new ExtractTextPlugin("app.css"),
        // For Production
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
		new webpack.optimize.UglifyJsPlugin()
   ]
}

module.exports = config;