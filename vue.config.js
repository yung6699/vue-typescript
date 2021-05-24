// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
	devServer: {
		overlay: false,
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.join(__dirname, 'src/'),
			},
		},
	},
};
