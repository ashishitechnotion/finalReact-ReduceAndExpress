var config = {
   entry: './main.js',
   
	
   output: {
      path:'/output',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 7373,
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
