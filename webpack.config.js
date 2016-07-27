var path = require('path');
var jqueryPath = path.resolve('node_modules/jquery/dist/jquery.js');
//指定替换规则
function rewriteUrl(replacePath){
  return function(req,options){
      //取得问号的索引
      var queryIndex = req.url.indexOf('?');
      //取得查询字符串
      var query =  queryIndex>=0?req.url.slice(queryIndex):'';
      //进行路径的替换
      req.url = req.path.replace(options.path,replacePath)+query;
      console.log(req.url);
  }
}

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
      contentBase:'build',//静态文件根目录
      proxy:[
          {
              path:/^\/api\/(.+)/,//我要替换的路径
              //目标服务，把此请求交给哪个服务器来处理
              target:'http://localhost:9090',
              // 指定路径 的替换规则
              rewrite:rewriteUrl('/$1\.json'),
              changeorigin:true
          }
      ]
    },
    //指定如何解析加载模块
    resolve:{
      //指定扩展名
      extensions:['','.js','.css','.json'],
      alias:{
          'jquery':jqueryPath
      }
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
            },
            {
                //加载以less后缀结尾的文件
                test:/\.less$/,
                //执行三个加载器
                loader:'style!css!less'
            },
            {
                test:/\.css$/,//加载css的
                loader:'style!css'
            },
            {
                //加载图标字体
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                loader:'url?limit=8192'
            },
            {
                //图片
                test:/\.(png|jpg|bmp|gif)$/,
                loader:'url?limit=8192'
            }
        ],
        //不再扫描此路径下面的文件里的依赖模块
        noParse: [jqueryPath]
    }
}