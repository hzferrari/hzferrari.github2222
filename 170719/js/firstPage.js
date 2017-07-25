
	// var phClickFlag = false;
	//点击输入框时，页面滚动到该位置
	// $("#phoneNum").on("click",function(){
	// 	phClickFlag = true;
	// 	var $this = this;
	// 	viewScroll($this);
	// })
	// $("#phoneNum，#identifyCode").on("click",function(){
	// 	if(phClickFlag === false){
	// 		var $this = this;
	// 		viewScroll($this);
	// 		phClickFlag === true;
	// 	}	
	// })
	// var viewScroll = function(Bt){
	// 	var $this = Bt;
	// 	$(".rule").css("margin-bottom","300px");
	// 	$this.scrollIntoView();
	// 	setTimeout(function(){
	// 		$(".rule").css("margin-bottom","40px");
	// 	},20);
	// }

	//点击“获取验证码”按钮，检测输入是否符合规则，切是否属于白名单
	document.getElementById("getCode").onclick = function(){
		checkWhithList(this);

	};
	function checkWhithList(tBtn){
		var thisBtn = tBtn;
		var flag = false;
		//获取输入的号码
		var phoneNum = document.getElementById("phoneNum").value;
		var phoneNumStr = phoneNum.toString(10);
		//移动号码段	
		var mobileRex = /^((134[0-8]{1})|(13[0,1,2,3,5,6,7,8,9]\d)|(15[0,1,2,3,5,6,7,8,9]\d)|(17[0,7])\d|(18\d\d)|(14\d\d)|(106\d))\d{7}$/;
        //先判断手机号格式是否正确
        if(phoneNumStr.length<=0){
        	document.getElementById("warm").style.visibility = "visible";
			document.getElementById("warm").textContent = "请输入手机号码！";
        }else if (!mobileRex.exec(phoneNum)){
        	document.getElementById("warm").style.visibility = "visible";
			document.getElementById("warm").textContent = "请输入正确的中国移动手机号码！";
        }else{
        	 //手机号码是否属于白名单号段内，发送验证码
			timeCount(thisBtn);
        }  
    
	}
	//验证码倒计时
	function timeCount(tBtn){
		var clock = '';
		var nums = 60;
		var btn = tBtn;
		btn.disabled = true; //将按钮置为不可点击
		// btn.value = nums+'s';
		btn.value = '已发送';
		clock = setInterval(doLoop, 1000); //一秒执行一次
		
		function doLoop(){
			nums--;
			if(nums < 58){
				if(nums > 0){
				btn.value = nums+'s后获取';
			 	}else{
			 		clearInterval(clock); //清除js定时器
			 		btn.disabled = false;
			 		btn.value = '获取验证码';
			 		nums = 60; //重置时间
			 	}
			}
			
		}
	}
	// document.getElementById("phoneNum ").onclick = function(){
	// 	document.getElementById("warm").style.visibility = "hidden";
	// };


	// ADD
	//“点击领取”按钮效果
 	// $("#getAward").click(function(){
 	//    $("#getAward").css("cssText","width:35% !important");
 	//    setTimeout(function(){
 	//    		$("#getAward").css("cssText","width:40% !important");},300);
 	// });
	//“去和彩云使用”按钮效果
	$(".openAndDown").click(function(){
	   $(".openAndDown").css("cssText","width:58% !important");
	   setTimeout(function(){$(".openAndDown").css("cssText","width:60% !important");},400);
	});
	//活动规则弹窗
	$(".Windowpop2").click(function () {
	   $("#box3").children(".box1").css("margin-top","-200%");
	   $("#box3").show();
	   setTimeout(function () {
	      $("#box3").children(".box1").css("margin-top","10%");
	   },200);
	   //弹窗后禁止背景滚动
	   $("body").css("overflow","hidden");
	})
	//“点击领取”弹窗，领取成功弹出#box1，否则弹出#box2，重复领取则弹出#box4,非白名单弹出#box6
	$("#getAward").click(function () {

		//“点击领取”按钮效果
 		$("#getAward").css("cssText","width:35% !important");
 	   	setTimeout(function(){
 	   		$("#getAward").css("cssText","width:40% !important");},300);
		//检测验证码输入是否符合规则，切是否正确
 	   if($("#identifyCode").val().length <=0 ){
 	   		document.getElementById("warm").style.visibility = "visible";
			document.getElementById("warm").textContent = "请输入验证码！";
 	   }else{
 	   	   var WinID="box";
		   var state=1;//后台返回状态，1为成功，0表示失败,2表示重复领取,3表示非白名单
		   if(state)  {
			   if(state==2)  WinID=WinID+5;
			   else if(state==3)  WinID=WinID+6;
			   else  WinID=WinID+1;
		   }
		   else WinID=WinID+2;

		   $("#"+WinID).show();
		   setTimeout(function () {
		      $("#"+WinID).children(".box1").css("margin-top","10%");
		   },200);
		    $("body").css("overflow","hidden");
 	   }

	})

	$(".wclose").click(function () {
	   $(".box1").css("margin-top","-200%");
	   setTimeout(function () {
	      $(".box").hide();
	   },600);
	   //关闭弹窗后恢复背景滚动
	   $("body").css("overflow","auto");
	})

	//点击输入框时隐藏下方提示文字
	$("#phoneNum,#identifyCode").on("click",function(){
		$("#warm").css("visibility","hidden");
	})
// loading 加载中
	 $(function () {
		 $("#box4").children(".box1").css("margin-top","50%");
		 $("#box4").show();
		 var loadState=0;
		 if(loadState==1) $("#box4").hide();//状态为1代表取号成功，结束loading动画

		 //最大loading等待时间3秒
		 setTimeout(function () {
			 $("#box4").hide();
		 },3000);

	 })

	$(function () {
		$("body").on("touchmove",function(event){
			event.preventDefault;
		}, false)
	})



