var path = require('path');
module.exports = {
    //指定入口文件
    entry:path.resolve('src/index.js'),
    //指定输出文件
    output:{
        //指定输出文件的路径目录
        path:path.resolve('build'),
        //指定输出文件的文件名
        filename:'bundle.js'
    },
    devServer:{
      stats:{colors:true},//是否显示颜色
      port:8080,//端口号
      contentBase:'build'//静态文件根目录
    },
    //指定模块的加载方式
    module:{
        //模块加载器数组
        loaders:[
            //指定针对不同的文件如何进行加载
            {
                test:/\.js$/,
                // babel-loader可以简写成babel
                loader:'babel',
                //只解析加载src 目录下的js文件
                include:path.resolve('src'),
                //不解析node_modules文件下面的文件
                exclude:/node_modules/
            }
        ]
    }
}