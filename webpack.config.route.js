var path = require('path');
var webpack = require('webpack');
//根据模板的HTML文件向目标文件夹自动生成一个目标html文件
//会把产出(打包后)的JS文件插入到html当中去
var HtmlWebpackPlugin = require('html-webpack-plugin');
//当打包完成自动打开浏览器，并访问指定URL
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
module.exports = {
    //入口文件
    entry: path.join(__dirname, './route/index.js'),
    //输出文件
    output: {
        path: './build', //文件夹的名称
        filename: 'bundle.js'//文件的名称
    },
    module: {
        //加载器
        loaders: [
            {
                test: /\.js$/,
                loaders:['react-hot','babel?presets[]=es2015&presets[]=react'],
                include: path.join(__dirname,'route'),
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                loader:'style!css'
            },
            {
                test: /(eot|svg|ttf|woff|woff2)$/,
                loader: 'url'
            }
        ]
    },
    devServer:{//配置webpack-dev-server
        hot:true,
        inline:true,//实时刷新，当源代码修改后实时刷新页面
        port:8080,//端口号
        contentBase:'build'//静态文件根目录
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./route/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new openBrowserWebpackPlugin({url:'http://localhost:8080'})
    ]
}

