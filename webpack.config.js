module.exports = {
	mode: "production",

	// Enable sourcemaps for debugging webpack's output
	devtool: "source-map",

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions
		extensions: [".ts", ".tsx"]
	},

	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "ts-loader"
					}
				]
			},
			// All output '.js' files will have any sourcemaps re-processed by 'soruce-map-loader'
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}
		]
	},

	/*
			When importing a module whose path matches one of the following, just assume a
			cooresponding global var exists, and use that instead.
			This is important because it allows us to avoid bundling all of our dependencies,
			which allows browsers to cache those libraries between builds.
	*/
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	}
};