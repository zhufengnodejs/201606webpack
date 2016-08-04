// 把对留言的操作都封装在此对象
// 新增 删除 查询
const COMMENTS = 'comments';
module.exports = {
    //查询原来的留言列表
   list(){
       //本ls里面获取留言列表 [{id:1,username:'张三',content:'今天天气真好',time:new Date()}]
       var result = localStorage.getItem(COMMENTS);
       return result?JSON.parse(result):[];
   },
    //{username:'张三',content:'今天天气真好',time:Date} 增加新的留言的功能
   add(comment){
       var comments = this.list();
       //自动赋于ID号
       comment.id = comments.length>0?comments[comments.length-1].id+1:1;
       comments.push(comment);
       localStorage.setItem(COMMENTS,JSON.stringify(comments));
   }
}