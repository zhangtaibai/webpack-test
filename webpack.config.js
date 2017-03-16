/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-16 14:40:19
 * @version $Id$
 */
var webpack = require('webpack')

module.exports = {
	entry:'./entry.js',
	output:{
		path:__dirname,
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:'style-loader!css-loader'}
		]
	},
	plugins:[
		new webpack.BannerPlugin('this project is powered by webpack')
	]
}
