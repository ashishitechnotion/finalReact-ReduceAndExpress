var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'published');
var porte = process.env.PORT || 7373;
var config = {
   entry: './main.js',
   
	
   output: {
      path:BUILD_DIR,
      filename: 'bundle.js',
   },
	
   devServer: {
      inline: true,
      port: porte,
	  headers: { "Access-Control-Allow-Origin": "*" }
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
