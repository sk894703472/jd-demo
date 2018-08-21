const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode:'none',
	entry:path.resolve(__dirname,'index/component/index.jsx'),
	output:{
		path:path.resolve(__dirname,'dist/'),
		filename:'bundle.js'
	},
	module:{
		rules:[
		{
			test:/\.jsx?$/,
			exclude:/node_modules/,
			use:['babel-loader']
		},{
			test:/\.css?$/,
			use:['style-loader','css-loader']
		},{
			test:/\.png|.jpg|.gif$/,
			use:['url-loader']
		}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname,'index.html'),
			filename:'index.html'
		})
	],
	devServer:{
		historyApiFallback:true,
		inline:true,
		contentBase:path.resolve(__dirname,'dist/')
	}
}