function tab(num){ 
	// 탭 컨텐츠 변경
	let tabCon = document.getElementsByClassName("evtWrap"),
		 select = document.querySelector(`.evt${num}Wrap`);

	for(let i = 0; i < tabCon.length; i++){ 
		tabCon[i].classList.remove('on');
	}

	select.classList.add('on');
	
	// 스크롤 이동
	let titHeight = document.querySelector(".titWrap").offsetHeight;

	window.scrollTo({
		top: titHeight,
		left: 0,
		behavior: 'smooth'
	});
}

function moveTop(){
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
}

function letsPlay(){
	let root = document.querySelector(".baseballImg img").src.split('baseball_');
	const listArr = [
		'out_leftBtm',
		'out_leftMdl', 
		'out_rightBtm', 
		'out_rightMdl', 
		'out_top',
		'1B_left',
		'1B_right',
		'1B_top',
		'2B_left',
		'2B_right',
		'3B',
		'homerun'
	];
	
	const animation = function(){
		let min = Math.ceil(1),
			 max = Math.floor(listArr.length),
			 num = Math.floor(Math.random() * (max - min + 1)) + min,
			 url = `${root[0]}baseball_${listArr[num - 1]}.png`;

		document.querySelector(".baseballImg img").src = url;
	}
	
	// 애니메이션
	let fast = setInterval(animation, 50);
	let normal = setInterval(animation, 100);
	let slow = setInterval(animation, 200);
	
	setTimeout(function(){
		clearInterval(fast);
	}, 500)
	
	setTimeout(function(){
		clearInterval(normal);
	}, 1300)
	
	setTimeout(function(){
		clearInterval(slow);
	}, 2500)
	
	// 결과
	setTimeout(function(){
		// 최종 점수 셋팅(개발 작업시 사용)
		// document.querySelector(".baseballImg img").src = `${root[0]}baseball_${listArr[  ** indexNumber **  ]}.png`;
		
		let slice_step1 = document.querySelector(".baseballImg img").src.split('baseball_'),
			 slice_step2 = slice_step1[1].split('.png'),
			 name = slice_step2[0];
		
		// 점수 팝업 노출
		setTimeout(function(){
			// 아웃
			if(name === listArr[0] || name === listArr[1] || name === listArr[2] || name === listArr[3] || name === listArr[4]){
				popOpen('pop2_10pt');
			}

			// 1루타
			if(name === listArr[5] || name === listArr[6] || name === listArr[7]){
				popOpen('pop2_10pt');
			}

			// 2루타
			if(name === listArr[8] || name === listArr[9]){
				popOpen('pop2_20pt');
			}

			// 3루타
			if(name === listArr[10]){
				popOpen('pop2_30pt');
			}

			// 홈런
			if(name === listArr[11]){
				popOpen('pop2_40pt');
			}
		},500)
		
		// 야구장 이미지 초기화
		setTimeout(function(){
			document.querySelector(".baseballImg img").src = `${root[0]}baseball_bg.png`;
		},800)
	}, 3000);
}
