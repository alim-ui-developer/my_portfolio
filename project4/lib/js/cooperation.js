function tab(type){ 
	// 탭 컨텐츠 변경
	let tabCon = document.getElementsByClassName("evtWrap"),
		 select = document.querySelector(`.${type}Wrap`);

	for(let i = 0; i < tabCon.length; i++){ 
		tabCon[i].classList.remove('on');
	}

	select.classList.add('on');
	
	// 스크롤 이동
	let titHeight = document.querySelector(".titWrap").offsetHeight;

	window.scrollTo({
		top: titHeight - 80,
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

// 단체 미션 게이지 바
function bar(num){
	let stepWidth = [2, 9.8, 19.6, 30, 40, 50.5, 60.5, 70, 79];
	
	document.querySelector(".groupWrap .contents .gauge .bar").style.width = `${stepWidth[num]}%`;
}

window.onload = function(){
	bar(7);
	// 0(zero)부터 8(full)까지 총 9가지 단계로 나눔
	// 포인트에 따라 bar함수의 파라미터 값 달라짐
}