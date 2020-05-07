const path = require('path');
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   entry: path.join(__dirname, '/src/index.js'),
   output: {
      filename: 'build.js',
      publicPath: "/",
      path: path.join(__dirname, '/dist')},
   module:{
      rules:[
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          } ,
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },  
        {
            test: /\.(png|jpeg|jpg|gif|svg|ico)$/,
            loader: 'file-loader',
        },
    ]
   },
   devServer: {
        historyApiFallback: true,
    },
   plugins:[
      new HtmlWebpackPlugin(
          {template: path.join(__dirname,'/public/index.html'),
           favicon: path.join(__dirname,'/public/favicon.ico')}
       )
   ]
}