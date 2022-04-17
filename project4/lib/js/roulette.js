window.onload = function(){
	$(".rulletWrap").find(".button").click(function(){
		rotation();
	});
	
	// 버튼 중복 클릭 방지
	var doubleSubmitFlag = false;
	
	function doubleSubmitCheck(){
		if(doubleSubmitFlag){
			return doubleSubmitFlag;
		}else{
			doubleSubmitFlag = true;
			return false;
		}
	}
	
	// 전체 버튼 비활성화
	function btn_off(){
		$(".btn_notice").attr("disabled",true);
		$(".pointLst").find(".btn").attr("disabled",true);
	}
	
	// 전체 버튼 활성화
	function btn_on(){
		$(".btn_notice").attr("disabled",false);
		$(".pointLst").find(".btn").attr("disabled",false);
	}

	// 룰렛 회전 스크립트
	function rotation(){
		const arr = [
			[0, 1],		// 시즈너블 선수팩 1장
			[45, 2],		// 20만 골드
			[90, 3],		// 클래식 전체 선수팩(거래 불가) 1장
			[135, 4],	// 10만 골드
			[180, 5],	// 레어 전체 선수팩 1장
			[225, 6],	// 100만 골드
			[270, 7],	// 엘리트 전체 선수팩 1장
			[315, 8],	// 50만 골드
		];

		// 번호 무작위 설정
		const num = Math.floor(Math.floor(Math.random() * 8 + 1)),
				deg = arr[num][0],
				idx = arr[num][1];

		// 버튼 중복 클릭 방지
		if(doubleSubmitCheck()) return;
		
		// 전체 버튼 비활성화
		btn_off();
		
		// 룰렛 돌리기
		$(".rullet").rotate({
			angle: 0,
			animateTo: 360 * 5 + deg,
			center: ["50%", "50%"],
			easing: $.easing.easeInOutElastic,
			callback: function(){ 
				const n = $(this).getRotateAngle();
				doubleSubmitFlag = false // 클릭 해제
			},
			duration:5000
	   });
		
		// 당첨 메세지 출력
		function messege(){
			var src = "../images/roulette/event01/giftPop" + idx + ".png";
			$(".giftImg").find("img").attr('src', src);
			popOpen('pop02')
		}

		setTimeout(messege, 5000); // 메세지 출력
		setTimeout(btn_on, 5000); // 전체 버튼 활성화
	};
};