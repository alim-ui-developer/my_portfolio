var scrollHeight = 0;

// 전체 메뉴 열기
function navOpen(){
	// 열렸을떄 scrollTop 체크
   scrollHeight = $(window).scrollTop();
	
	$("body").addClass("o_hidden");
   $(".wrap").addClass("fix").css("top",-scrollHeight);
	
	$("header nav").find(".navi").animate({"right":"0"},300);
	$("header nav").delay(100).fadeIn(200);
};

// 전체 메뉴 닫기
function navClose(){
	// 최상위 div의 탑 값(=팝업이 열렸을 때의 scrollTop) 찾아서 절대값으로 반환
   wrapTop = $(".wrap").offset().top;
   var scrollTop = Math.abs(wrapTop);
	
	$("body").removeClass("o_hidden");
   $(".wrap").removeClass("fix").css("top",0);
	
	$('html,body').scrollTop(scrollTop); // 스크롤 이동
	
	$("header nav").fadeOut();
	$("header nav").find(".navi").animate({"right":"-75%"});
};

// 메뉴 이동
function move(name){
	// var position = $("." + name).offset().top;
	var position = $("." + name).position().top;
	
	$('html, body').stop().animate({scrollTop : position },400);
	navClose();
	return false;
}

// 팝업 열기
function popOpen(name,num){
	// 열렸을떄 scrollTop 체크
   scrollHeight = $(window).scrollTop();
	
	$("body").addClass("o_hidden");
   $(".wrap").addClass("fix").css("top",-scrollHeight);
	
   $("." + name).parents(".popup").css("left","0");
   $("." + name).css("left","50%");
	
	// 게임 소개 팝업
	if(name == 'pop03'){
		$("." + name).find(".tab").find("li:nth-child(" + num + ")").trigger("click");
	}
	
	// 미디어 클립 팝업
	if(name == 'pop04'){
		$("." + name).find(".slick-dots").find("li:nth-child(" + num + ")").trigger("click");
	}
};

// 팝업 닫기
function popClose(name){
	// 최상위 div의 탑 값(=팝업이 열렸을 때의 scrollTop) 찾아서 절대값으로 반환
   wrapTop = $(".wrap").offset().top;
   var scrollTop = Math.abs(wrapTop);
	
	$("body").removeClass("o_hidden");
   $(".wrap").removeClass("fix").css("top",0);
	
	$('html,body').scrollTop(scrollTop); // 스크롤 이동
	
   $("." + name).parents(".popup").css("left","-9999px");
   $("." + name).css("left","-9999px");
};

// 탭 활성화
function tab(num){
	$(".tab").find("li").removeClass("now");
	$(".tab").find("li").eq(num-1).addClass("now");
	
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

function width(){
	var winWidth = $(window).width();
	
	$(".wrap").css("width",winWidth + "px");
}
$(function(){
	width();
	
	$(".slider").each(function(){
		$(this).slick({
			dots: true,
			infinite: true,
			speed: 500,
			asNavFor: '.thumbnail'
		});
	});
	
	$('.thumbnail').slick({
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
		$(".pop03").find(".tab").css("width","calc(100% - 40px)")
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
	width();
});

$(window,"html","body").on("scroll",function(){
	var visual = $(".visual").position().top;
	var registration = $(".registration").position().top;
	var store = $(".store").position().top;
	var event01 = $(".event01").position().top;
	var event02 = $(".event02").position().top;
	var game = $(".game").position().top;
	var mediaClip = $(".mediaClip").position().top;
	var winHeight = $(window).height();
	var st = $(window,"html","body").scrollTop();
	
	console.log("registration - (winHeight/2) : " + (registration - (winHeight/2)) + " &&&&&&& registration - (winHeight*0.7) : " + (registration - (winHeight*0.7)))

	// 이사만루3 사전 등록
	if(st >= (registration - (winHeight * 0.7)) && st < store){
		// 타이틀
		$(".registration h3").animate({
			"opacity":"1",
			"marginLeft":"0"
		});
		
		// 기간
		$(".registration .period").delay(300).animate({
			"opacity":"1"
		});
		
		// 서브 문구
		$(".registration p").delay(300).animate({
			"opacity":"1"
		});

		// 폼 박스
		$(".registration article").delay(800).animate({
			"opacity":"1"
		},500);

		// 선수
		$(".registration .player").delay(1000).animate({
			"opacity":"1",
			"right":"0"
		},300)

		// 공
		$(".registration .ball").delay(1300).animate({
			"opacity":"1"
		},500)
	}
	
	// 스토어별 사전 등록
	if(st >= (store - (winHeight * 0.7)) && st < event01){
		// 타이틀
		$(".store h3").animate({
			"opacity":"1",
			"marginLeft":"0"
		});
		
		// 기간
		$(".store .period").delay(300).animate({
			"opacity":"1"
		});
		
		// 서브 문구
		$(".store p:not(.period)").delay(300).animate({
			"opacity":"1"
		});
		
		// 이미지
		$(".store .storeLink div").delay(500).animate({
			"opacity":"1"
		});

		// 보상 컨텐츠
		$(".store .storeLink ul li").delay(800).each(function(){
			var idx = $(this).index();

			$(this).delay(200*idx).animate({
				"opacity":"1",
				"bottom":"0"
			},200)
		});
		
		// 보상 컨텐츠
		$(".store .storeGift > div").delay(800).each(function(){
			var idx = $(this).index();

			$(this).delay(200*idx).animate({
				"opacity":"1"
			},1000)
		});
	}
	
	// 구단명 선점 이벤트
	if(st >= (event01 - (winHeight * 0.7)) && st < event02){
		// 타이틀
		$(".event01 h3").animate({
			"opacity":"1",
			"marginLeft":"0"
		});
		
		// 기간
		$(".event01 > p").delay(300).animate({
			"opacity":"1"
		});
		
		// 로그인 후
		$(".event01 .after").delay(800).animate({
			"opacity":"1"
		})

		// 로그인 전
		$(".event01 .before").delay(800).animate({
			"opacity":"1"
		})
	}
	
	// 접속 유도 이벤트
	if(st >= (event02 - (winHeight * 0.7)) && st < game){
		// 타이틀
		$(".event02 h3").animate({
			"opacity":"1",
			"marginLeft":"0"
		});
		
		// 기간
		$(".event02 .period").delay(300).animate({
			"opacity":"1"
		});
		
		// 서브 문구
		$(".event02 .subTxt").delay(300).animate({
			"opacity":"1"
		});
		
		// 컨텐츠 박스
		$(".event02 .event02_01Box").delay(800).animate({
			"opacity":"1"
		});

		$(".event02 .event02_02Box").delay(1000).animate({
			"opacity":"1"
		});

		$(".event02 .event02_03Box").delay(1200).animate({
			"opacity":"1"
		});

		$(".event02 .event02_04Box").delay(1400).animate({
			"opacity":"1"
		});
	}
	
	// 게임 소개
	if(st >= (game - (winHeight * 0.7)) && st < mediaClip){
		// 타이틀
		$(".game h3").animate({
			"opacity":"1",
			"marginLeft":"0"
		});
		
		$(".game section > article").delay(800).each(function(){
			var idx = $(this).index();

			$(this).delay(200*idx).animate({
				"bottom":"0",
				"opacity":"1"
			},300)
		})

		$(".game .memo").delay(1400).animate({
			"opacity":"1",
			"marginLeft":"0"
		})
	}
	
	// 미디어 클립
	if(st >= (mediaClip - (winHeight * 0.7))){
		// 타이틀
		$(".mediaClip h2").animate({
			"opacity":"1",
			"marginLeft":"0"
		});
		
		// 기간
		$(".mediaClip p").delay(300).animate({
			"opacity":"1"
		});
		
		// 목록
		$(".mediaClip ul li").delay(800).each(function(){
			var idx = $(this).index();

			$(this).delay(300*idx).animate({
				"opacity":"1"
			},500)
		})
	}
})