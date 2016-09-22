$(function(){
	
	function responsive() {
		var _width = $(".js").width();
		
		var _height = _width*9/16;
		$(".js").css('height',_height+'px');
	}
	function windowResize(){
		$(window).resize(function(){
			responsive();
		});
	}
	responsive();
	windowResize();

	var curr = 0;
	$("#jsNav a.trigger").each(function(i){
		$(this).click(function(){
			curr=i;
			// .siblings()取得一个包含匹配的元素集合中每一个元素的所有唯一同辈元素的元素集合。可以用可选的表达式进行筛选。
			$("#js img").eq(i).fadeIn("fast").siblings("img").fadeOut("fast");
			$(this).addClass("imgSelected").siblings().removeClass("imgSelected");
		});
	});

	// HTML DOM setIntervaL() 方法:
	//setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
	//setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭
	var timer = setInterval(function(){
		//这一段是实现每隔3s自动切换下一张图片
		//.click() 里面不写function时就是实现触发点击的功能。
		var go = (curr + 1) % 5;
		$("#jsNav a.trigger").eq(go).click();
	},3000);

	//鼠标移到数字上时，暂停自动切换图片，移开后重新开始读秒。
	$("#js,#next,#prev").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
		var go = (curr + 1) % 5;
		$("#jsNav a.trigger").eq(go).click();
	},3000);
	});

	//左右切换按钮
	$("#next").click(function(){
		if(curr == 4){
			var go = 0;
		}else{
			var go = (curr + 1) % 5;
		}
		$("#jsNav a.trigger").eq(go).click();
	});
	$("#prev").click(function(){
		if(curr == 0){
			var go = 4;
		}else{
			var go = (curr - 1) % 5;
		}
		$("#jsNav a.trigger").eq(go).click();
	});
});