 $(function(){
	//点击输入框时，页面滚动到该位置
	$("#phoneNum,#identifyCode").on("click",function(){
		$this = this;
		$(".rule").css("margin-bottom","300px");
		$this.scrollIntoView();
		setTimeout(function(){
			$(".rule").css("margin-bottom","40px");
		},200);
		
	})
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
        if (!mobileRex.exec(phoneNum)){
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
				btn.value = nums+'s';
			 	}else{
			 		clearInterval(clock); //清除js定时器
			 		btn.disabled = false;
			 		btn.value = '获取验证码';
			 		nums = 60; //重置时间
			 	}
			}
			
		}
	}
	document.getElementById("phoneNum").onclick = function(){
		document.getElementById("warm").style.visibility = "hidden";
	};

	//点击“点击领取”按钮，检测验证码输入是否符合规则，切是否正确
	//

	//
	// ADD


	$(".clickBtm").click(function(){
	   $(".clickBtm").css("width","35%");
	   setTimeout(function(){$(".clickBtm").css("width","40%");},1000);
	});
	//活动规则弹窗
	$(".Windowpop2").click(function () {
	   $("#box3").children(".box1").css("margin-top","-200%");
	   $("#box3").show();
	   setTimeout(function () {
	      $("#box3").children(".box1").css("margin-top","10%");
	   },200);
	})
	//点击领取弹窗，领取成功弹出#box1，否则弹出#box2
	$(".Windowpop").click(function () {
	   var WinID="box";
	   var state=1;//后台返回状态，1为成功，0表示失败
	   if(state)  WinID=WinID+1;
	   else WinID=WinID+2;

	   $("#"+WinID).show();
	   setTimeout(function () {
	      $("#"+WinID).children(".box1").css("margin-top","10%");
	   },200);
	})

	$(".wclose").click(function () {
	   $(".box1").css("margin-top","-200%");
	   setTimeout(function () {
	      $(".box").hide();
	   },600);

	})

})

