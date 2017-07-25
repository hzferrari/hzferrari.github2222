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

            //使用计算时差的方式判断是否已经拉起app
            var checkOpen = function (abc){
                var _clickTime = +(new Date()),
                    _count = 0,
                    intHandle = 0;
  
                //启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束
                intHandle = setInterval(function(){
                    _count++;
                    var elsTime = +(new Date()) - _clickTime;
                    
                    if (_count>= 100 || elsTime > 3000 ) {
                        clearInterval(intHandle);
                        //计算结束，根据不同，做不同的跳转处理，0表示已经跳转APP成功了
                        if ( elsTime > 3000 || document.hidden || document.webkitHidden) {
                            abc(0);
                        } else {
                            abc(1);
                        }
                          
                    }
                }, 20);
            }

            _openAppUrl = function(url){

                function _show(){
                    window.location.href = downLoadUrl; //在当前窗口中打开链接
                }
               
               //点击后同时进行本地app拉起与网页转跳行为
                _openAppUrl = function(url){
                    location.href = url;
                     
                    //1.点击后立即尝试打开本地app；
                    //2.点击后2秒，当前网页转跳到url。
                    // setTimeout(function(){
                    //     _show();
                    // },2000);

                    //点击按钮后3秒没有转跳到app则转跳下载链接
                    checkOpen(function(opened){
                        //跳转app失败
                        if(opened === 1){
                            _show();
                        }
                    });
                    
                }     
                _openAppUrl(url);
      
            }               
        }     
        _openAppUrl(appUrl);
    }
  
  
    $(".openAndDown").on("click",function(){
        _openApp();
        return false;
    });
});

