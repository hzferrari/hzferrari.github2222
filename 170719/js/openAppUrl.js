// 本地app跳转
//
$(function(){
    function _openApp(){
        //判断设备是安卓还是苹果系统
        var ua = navigator.userAgent;
        var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1,
        isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        downLoadUrl="",
        appUrl="";         
      
        //如果是在微信内部点击的时候
        // if(ua.toLocaleLowerCase().indexOf("micromessenger") != -1 ){
        if(0==1){
            _openAppUrl = function(){
                alert("请点击右上角用浏览器查看！");
            }
        }else{
            //在浏览器打开，判断是在移动端还是在PC端
            if(isiOS){
                //IOS设备的浏览器
                appUrl = "mcloud://";//ios客户端拉起链接
                downLoadUrl = 'itms-apps://itunes.apple.com/app/id544673497';  

            }else if(isAndroid){
                //Android的设备
                appUrl = "hecaiyun://launch";//安卓客户端拉起链接
                downLoadUrl = 'http://caiyun.feixin.10086.cn:7070/portal/client_new.jsp?v=mCloud_800';
            }else{
                //PC端或其他设备
                _openAppUrl = function(){
                    alert("DEMO，请在移动端的浏览器查看！");
                }
            }

            _openAppUrl = function(url){

                function _show(){

                    // window.open(downLoadUrl); //在新建窗口中打开链接
                    window.location.href = downLoadUrl; //在当前窗口中打开链接
                }
                //点击后同时进行本地app拉起与网页转跳行为
                //1.点击后立即尝试打开本地app；
                //2.点击后2秒，当前网页转跳到url。
                _openAppUrl = function(url){
                    location.href = url;
                    setTimeout(function(){
                        _show();
                    },2000);
                    
                }     
                _openAppUrl(url);
      
            }               
        }     
        _openAppUrl(appUrl);
    }
  
  
    $("#openAndDown").on("click",function(){
        _openApp();
        return false;
    });
});

