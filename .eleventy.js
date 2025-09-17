module.exports = (config) => {
	// Set directories to pass through to the dist folder
	config.addPassthroughCopy('./src/css/');
	config.addPassthroughCopy('./src/images/');
	config.addPassthroughCopy('./src/fonts/');
	return {
		dir: {
			input: 'src',
			output: 'dist',
		},
	};
};