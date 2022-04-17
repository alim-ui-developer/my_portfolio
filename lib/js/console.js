$(function(){
'use strict';

	if (typeof console === "object" && console.log && typeof console.log === "function"){
		if (isUA('chrome') && !isUA('edge')) {
			// not IE
			 console.log("%c            ","font-size:50px;line-height:130px;background:url('http://alimyy.com/portfolio/2020/images/consoleImg.jpg') 0 50% no-repeat;background-size:auto 120px")
			console.log("\n%cCall Me Now!%c\n🤙010.5919.5514\n","font-size:14px;line-height:20px;font-weight:bold;color:#FF337D","font-size:14px;line-height:20px")
		}else{
			// IE
			console.log("\nAre you curious about me?\n\Call Me Now:)  010.5919.5514\n")
		}
	}

	function isUA(userAgent){
		return navigator.userAgent.toLowerCase().indexOf(userAgent) > -1;
	}
});