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
                alert("DEMO，请在移动端的浏览器查看！");
            }

            //使用计算时差的方式判断是否已经拉起app
            var checkOpen = function(opened){
                var _clickTime = +(new Date()),
                    _count = 0,
                    intHandle = 0;
  
                //启动间隔20ms运行的定时器，并检测累计消耗时间是否超过设定值，超过则结束
                //累计时间 = 125*20ms，且必须小于5000ms。
                intHandle = setInterval(function(){
                    _count++;
                    var elsTime = +(new Date()) - _clickTime;
                    
                    if (_count>= 125 || elsTime > 5000 ) {
                        clearInterval(intHandle);
                        //计算结束，根据不同，做不同的跳转处理，0表示已经跳转APP成功了
                        if ( elsTime > 5000 || document.hidden || document.webkitHidden) {
                            opened(0);
                        } else {
                            opened(1);
                        }
                          
                    }
                }, 20);
            }

         
           //点击后同时进行本地app拉起与网页转跳行为
            _openAppUrl = function(url){
                location.href = url;
                
                //点击按钮后2.5秒没有转跳到app则转跳下载链接
                checkOpen(function(opened){
                    //跳转app失败
                    if(opened === 1){
                        location.href = downLoadUrl;
                    }
                });      
                
            }     
                         
        }     
        _openAppUrl(appUrl);
    }
  
  
    $(".openAndDown").on("click",function(){
        _openApp();
        return false;
    });
});

