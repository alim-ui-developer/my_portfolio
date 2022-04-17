// txtBox 높이 자동 계산
function txtBox(){
	var winWidth = $(window).width();
	
	$(".listCon").find(".txtBox").css("height",(winWidth/2)*0.58 + "px");
}



function motion(){
	var lst = $(".container").find(".listCon");
	var txt = $(lst).find(".txtBox");
	
	$("header").find("h1").animate({"opacity":"1","top":0},500,function(){
		$("header").find("p").animate({"opacity":"1"},500)
	});
	
	lst.each(function(){
		var idx = $(this).index() + 1;
		$(this).delay(300*idx).animate({"opacity":"1"},200,function(){
			$(txt).delay(500).animate({"opacity":"1"},300);
		});
	});
}

$(function(){
	// 바로가기 버튼
	$(".btn_go").each(function(){
		$(this).hover(function(){
			$(this).toggleClass("on");
		});
	});
	motion();
	txtBox();
});

$(window).resize(function(){
	txtBox();
});

$(window).on("scroll",function(){

})