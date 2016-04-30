module.exports = {
	entry: [
        './src/Grocery.js'
    ],
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [ {
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: [ 'es2015', 'react' ]
			}
		} ]
	},
	devServer: {
		contentBase: __dirname,
		colors: true,
		historyApiFallback: true,
		inline: true
	}
};
