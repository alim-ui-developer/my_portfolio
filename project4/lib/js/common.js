// 팝업 출력시 스크롤 막기
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e){
  e.preventDefault();
}

function preventDefaultForScrollKeys(e){
	if (keys[e.keyCode]){
		preventDefault(e);
		return false;
	}
}

var supportsPassive = false;
try {
	window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
		get: function () { supportsPassive = true; } 
	}));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// 스크롤 막기
function disableScroll(){
	window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
	window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
	window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
	window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// 스크롤 풀기
function enableScroll(){
	window.removeEventListener('DOMMouseScroll', preventDefault, false);
	window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
	window.removeEventListener('touchmove', preventDefault, wheelOpt);
	window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}


// 팝업 열기
function popOpen(name){
	// disableScroll();
	
   $("." + name).parents(".popup").fadeIn(200);
   $("." + name).css("display","block");
};

// 팝업 닫기
function popClose(name){
	enableScroll();
	
   $("." + name).parents(".popup").fadeOut(200);
   $("." + name).css("display","none");
};

$(document).ready(function(){
	$(document).bind("contextmenu", function(e){
		return false;
	});
});

$(document).bind('selectstart',function(){
	return false;
});

$(document).bind('dragstart',function(){
	return false;
});