// 팝업 열기
function popOpen(name,num){
   $("." + name).parents(".popup").css("left","0");
   $("." + name).css("left","50%");
	
	// 게임 소개 팝업
	if(name == 'pop03'){
		$("." + name).find(".tab").find(".slick-slide:nth-child(" + num + ")").find("li").trigger("click");
	}
	
	// 미디어 클립 팝업
	if(name == 'pop04'){
		$("." + name).find(".slick-dots").find("li:nth-child(" + num + ")").trigger("click");
	}
};

// 팝업 닫기
function popClose(name){
   $("." + name).parents(".popup").css("left","-9999px");
   $("." + name).css("left","-9999px");
};

// 탭 활성화
function tab(num){
	$(".tab").find(".txtBtn").removeClass("now");
	$(".tab").find(".tabBtn" + num).addClass("now");

	$("article[class^='sliderCon']").css("z-index","-1");
	$(".sliderCon" + num).css("z-index","10");
};

// 동영상 재생
function vdoPlay(){
	$(".video").get(0).play();
};

// 동영상 일시정지
function vdoPause(){
	$(".video").get(0).pause();
};

// 숫자 입력 체크
function chkNumber(event) {
   event = event || window.event;
   var keyID = (event.which) ? event.which : event.keyCode;
   if ((keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39)
      return true;   
   else
      removeChar(event);
}

// 입력받은 키가 숫자가 아닐 경우 제거
function removeChar(event) {
   event = event || window.event;
   var keyID = (event.which) ? event.which : event.keyCode;
   if (keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39)
      return;
   else
      event.target.value = event.target.value.replace(/[^0-9]/gi, "");       
}

// 비주얼 스크린 높이값 지정(ie11대응)
function screenHeight(){
	var winHeight = $(window).height();
	
	$(".visual").find(".screen").css({
		"height" : winHeight + "px",
		"min-height" : winHeight + "px"
	});
}

$(function(){
	vdoPlay();
	screenHeight();
	
	// 이미지 버튼 hover효과 공통(이미지 주소 변경)
	$(".imgBtn").each(function(){
		var type = $(this).attr("type");
		
		$(this).hover(function(){
			var img = $(this).find("img");
			img.attr("src", img.attr("src").replace("_off", "_on"));
		},function(){
			var img = $(this).find("img");
			img.attr("src", img.attr("src").replace("_on", "_off"));
		});
	});
	
	// 텍스트 버튼 hover효과 공통
	$(".txtBtn").each(function(){
		$(this).hover(function(){
			$(this).toggleClass("on")
		});
	});
	
	$(".slider").each(function(){
		$(this).slick({
			dots: true,
			arrows: true,
			infinite: true,
			speed: 500,
			asNavFor: '.thumbnail ul'
		});
	});

	$('.thumbnail ul').slick({
		slidesToShow: 4,
		// slidesToScroll: 1,
	  asNavFor: '.slider',
	  focusOnSelect: true
	});
	
	// 미디어 클립 팝업 탭 스크립트
	var thumbCount = $(".thumbnail").find(".slick-slide:last-child").index()+1;

	if(thumbCount > 4){
		$(".pop04").find(".thumbnail").css("background","none");
	}
	
	// 게임 소개 팝업 탭 스크립트
	var tabCount = $(".tab").find(".txtBtn:last-child").index()+1;
	
	if(tabCount <= 4){
		$(".pop03").find(".tab").css("width","100%")
	}else{
		$(".pop03").find(".tab").css("width","calc(100% - 80px)")
	}
	
	$('.tab').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true
	});

	/********************** 개발 작업 후 삭제 **********************/
   $(".popOpenBtn").find("dt").on("click",function(){
      $(this).siblings("dd").slideToggle(100);
   });
	/********************** 개발 작업 후 삭제 **********************/
});

$(window).resize(function(){
	screenHeight();
});