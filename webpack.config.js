const path = require('path');

module.exports = {
	mode: "development",
	entry: './dev/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.js', '.jsx']
	  },
	  module: {
		rules: [
		  {
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
			  cacheDirectory: true,
			  presets: ['react', 'es2015']
			}
		  }
		]
	  }
};