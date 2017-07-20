 $(function(){
	//点击输入框时，页面滚动到该位置
	$("input").on("click",function(){
		$(".rule").css("margin-bottom","300px");
		setTimeout(function(){
			this.scrollIntoView();
		},2000);
		setTimeout(function(){
			$(".rule").css("margin-bottom","40px");
		},200);
		
	})
	//点击“获取验证码”按钮，检测输入是否符合规则，切是否属于白名单
	document.getElementById("getCode").onclick = function(){checkWhithList()};
	function checkWhithList(){
		if(document.getElementById("phoneNum").value.length < 11){
			document.getElementById("warm").style.visibility = "visible";
			document.getElementById("warm").textContent = "请输入11位的手机号码！";
		}else{
			var phoneNum = document.getElementById("phoneNum").value;
			var phoneNumStr = phoneNum.toString(10);	
			if(phoneNumStr.indexOf("1380288") === 0){
				alert("属于白名单,\"1380288\"开头");
			}else if(phoneNumStr.indexOf("1392220") === 0){
				alert("属于白名单,\"1392220\"开头");
			}else if(phoneNumStr.indexOf("1390222") === 0){
				alert("属于白名单,\"1390222\"开头");
			}else{
				alert("不在白名单");	
			}
		}
	}
	document.getElementById("phoneNum").onclick = function(){
		document.getElementById("warm").style.visibility = "hidden";
	};

	//点击“点击领取”按钮，检测验证码输入是否符合规则，切是否正确

})

