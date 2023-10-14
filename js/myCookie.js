// **封装四个函数**

// - setCookie()——创建Cookie
// - getCookie()——获取Cookie
// - removeCookie()——删除Cookie
// - claerCookie()—— 清空cookie



function setCookie(key,val,time){
    // setCookie()——创建Cookie
    var time_=new Date()
    time_.setDate(time_.getDate()+time)
    // document.cookie=key+'='+val+';expires='+time_

    document.cookie=`${key}=${val};expires=${time_}`
}
function getCookie(key){
    // - getCookie()——获取Cookie
    var data=document.cookie;
    // console.log(data);
    var array=data.split('; ')
    for(var item of array){
        // console.log(item);
        var cookieArray=item.split('=')
        // console.log(cookieArray[0]);
        // console.log(cookieArray[1]);
        if(cookieArray[0]==key){
            // console.log(cookieArray[1]);
            return cookieArray[1]
        }
    }
}
function removeCookie(key){
    // removeCookie()——删除Cookie
    // console.log(this);//window
    this.setCookie(key,'',-1)
    
}
function clearCookie(){
    // claerCookie()—— 清空cookie
    var data=document.cookie;
    var array=data.split('; ')
   
    // console.log(array.length);
    for(var i=0;i<array.length;i++){
        // console.log(i);
        console.log(array[i]);
        var cookieArray=array[i].split('=')
        this.removeCookie(cookieArray[0])
    }
   
}




// // 2.把构造函数上的方法放到 原型对象 封装cookie
// Cookie.prototype.setCookie=function(key,val,time){
//     // setCookie()——创建Cookie
//     var time_=new Date()
//     time_.setDate(time_.getDate()+time)
//     // document.cookie=key+'='+val+';expires='+time_

//     document.cookie=`${key}=${val};expires=${time_}`
// }
// Cookie.prototype.getCookie=function(key){
//     // - getCookie()——获取Cookie
//     var data=document.cookie;
//     // console.log(data);
//     var array=data.split('; ')
//     for(var item of array){
//         // console.log(item);
//         var cookieArray=item.split('=')
//         // console.log(cookieArray[0]);
//         // console.log(cookieArray[1]);
//         if(cookieArray[0]==key){
//             // console.log(cookieArray[1]);
//             return cookieArray[1]
//         }
//     }
// }
// Cookie.prototype.removeCookie=function (key){
//     // removeCookie()——删除Cookie
//     // console.log(this);//window
//     this.setCookie(key,'',-1)
    
// }

// Cookie.prototype.clearCookie=function(){
//     // claerCookie()—— 清空cookie
//     var data=document.cookie;
//     var array=data.split('; ')
   
//     // console.log(array.length);
//     for(var i=0;i<array.length;i++){
//         // console.log(i);
//         console.log(array[i]);
//         var cookieArray=array[i].split('=')
//         this.removeCookie(cookieArray[0])
//     }
   
// }
// // 1.创建cookie的构造函数
// function Cookie(){
// }