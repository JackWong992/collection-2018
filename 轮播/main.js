//改进后的代码：
let n
first()
setInterval(function(){
    makeLeave(getImage(n))
    .one('transitionend',function(e){
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n+1))
    n++;   
},3000)


//封装的代码

function getImage(n){  //获取照片
   return $(`.images > img:nth-child(${x(n)})`)   
}
function x(w){  //保证是在（1-3）图片内进行
    if(w>3){
        w = w%3
    if(w===0){w=3}
    }
    return w
} 

function first(){         //初始化
    n=1;
    $(`.images > img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
}
function makeCurrent($node){  //正常状态节点
    return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){  //离开状态节点
   return $node.removeClass('enter current').addClass('leave')    
}
function makeEnter($node){  //等待进入节点
  return $node.removeClass('current leave').addClass('enter')
}







// $('.images > img:nth-child(1)').addClass('current')
// $('.images > img:nth-child(2)').addClass('enter')
// $('.images > img:nth-child(3)').addClass('enter')
// let n=1
// setInterval(function(){
//     $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
//     .one('transitionend',function(e){
//         $(e.currentTarget).removeClass('leave').addClass('enter')
//     })
//     $(`.images > img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current') 
//     n++;   
// },3000)
// function x(w){
//     if(w>3){
//         w = w%3
//     if(w===0){w=3}
//     }
//     return w
// }