//// 공게임즈 공통 console copyright
$(function(){
   'use strict';
   
   if (typeof console === "object" && console.log && typeof console.log === "function"){
      if (isUA('chrome') && !isUA('edge')) {
         // not IE
         console.log("%c           ","font-size:50px;line-height:90px;background:url('http://gpbuild.gonggames.com/publishing/console/logo.jpg') 0 50% no-repeat;background-size:auto 60px")
         console.log("\n%cIt ain't over till it's over.  \n%c                        - Yogi Berra\n\n%cWelcome:) %chttp://www.gonggames.com\n","font-size:15px;line-height:22px;font-style:italic","color:gray", "font-size:13px;line-height:20px;font-weight:bold;color:#4ab145","font-size:13px;line-height:20px;text-decoration:underline")
      }else{
         // IE
         console.log( "＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊\
                     \n＊　　　　　　　　　　　　　　　　　　  ＊\
                     \n＊　　　   Copyright GONGGAMES　　　　＊\
                     \n＊　　　   All Rights Reserved　　　　＊\
                     \n＊　　　　　　　　　　　　　　　　　　  ＊\
                     \n＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊\
                  ");
         console.log("\nIt ain't over till it's over.  \n                        - Yogi Berra\n\nWelcome:) http://www.gonggames.com\n")
      }
   }

   function isUA(userAgent){
      return navigator.userAgent.toLowerCase().indexOf(userAgent) > -1;
   }
});