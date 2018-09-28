//let text=document.querySelector("textarea");
//let num=document.querySelector("span");
//let btn=document.querySelector(".rightthree");
//let ul=document.querySelector(".ul");
//let input1=document.querySelector("input:nth-child(1)");
////let input2=document.querySelector("input:nth-child(2)");
//console.log(text,num);
////随着输入的内容,字数实时变化
//text.oninput=function(){	
//	let textnum=this.value.length;
//	console.log(textnum);
//	num.innerHTML=textnum;
//}
//
//btn.onclick=function(){
//	let name=input1.value;
//	let con=text.value;
//	let str=`<div class="leftone">
//  				<div class="tuuu"><img src="./img/touxiang.png" height="40" width="40"></div>
//  				<div class="ziii">
//  					<h4>${name}</h4>
//  					<p>${con}</p>
//  				</div>
//  				<div class="time">2018-01-04 16:18:53</div>
//  			</div>`;
//  ul.innerHTML+=str;
//  input.value="";
//  text.value="";
//  num.innerHTML="0";
//	             
//}
//btn.onclick=function(){
//	if(input1.value!==""&&text.value!==""){
//		let name=input1.value;
//		let con=text.value;
//		str=`<div class="leftone">
//  				<div class="tuuu"><img src="./img/touxiang.png" height="40" width="40"></div>
//  				<div class="ziii">
//  					<h4>${name}</h4>
//  					<p>${con}</p>
//  				</div>
//  				<div class="time">2018-01-04 16:18:53</div>
//  			</div>`;
//  	ul.innerHTML+=str;
//      input1.value="";
//      text.value="";
//      num.innerHTML=0;
//	}else{
//		return;
//	}
//}

$("textarea").blur(function(){
	let textnum=$("textarea").val().length;
	$("span").html(textnum);
})

$(".rightthree").click(function(){
	if($(".right .rightone:nth-child(1) input").val()!==""&&$("textarea").val()!==""){
	let name=$(".right .rightone:nth-child(1) input").val();
	let con=$("textarea").val();
	let str=`<div class="leftone">
  				<div class="tuuu"><img src="./img/touxiang.png" height="40" width="40"></div>
 				<div class="ziii">
 					<h4>${name}</h4>
  					<p>${con}</p>
  				</div>
  				<div class="time">2018-01-04 16:18:53</div>
  			</div>`;
  	$(".ul").append(str);
  	$(".right .rightone:nth-child(1) input").val("");
  	$("textarea").val("");
  	$("span").html(0);
  }
})





