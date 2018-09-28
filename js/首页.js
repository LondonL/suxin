let bannerdot=document.querySelectorAll(".dot li");
let bannerimg=document.querySelectorAll(".tu1 a");
let banner=document.querySelector(".banner");
let lbtn=document.querySelector(".btnleft");
let rbtn=document.querySelector(".btnright");
console.log(bannerdot,bannerimg,banner,lbtn,rbtn);
	//初始状态，第一张图片显示，第一个轮播点点亮
 let num=0;
bannerimg[0].style.zIndex=2;
bannerdot[0].style.background="#FFFFFF";
//遍历轮播点
for(let i=0;i<bannerdot.length;i++){
	bannerdot[i].onmouseover=function(){
		//清空所有图片的层级，关闭所有轮播点的颜色
		for(let j=0;j<bannerimg.length;j++){
			bannerimg[j].style.zIndex=1;
			bannerdot[j].style.background="#B0B0B0"
		}
		//移入的轮播点对应的图片层级提高，对应轮播点点亮
		bannerimg[i].style.zIndex=2;
		bannerdot[i].style.background="#FFFFFF";
		num=i;
	}
}
//自动轮播
let t=setInterval(move,2000);
function move(){
	num++;
	if(num==bannerimg.length){
		num=0;
	}
	for(let j=0;j<bannerimg.length;j++){
			bannerimg[j].style.zIndex=1;
			bannerdot[j].style.background="#B0B0B0";
		}
	bannerimg[num].style.zIndex=2;
	bannerdot[num].style.background="#FFFFFF";
}
//停止事件间隔函数
banner.onmouseover=function(){
	clearInterval(t);
}
banner.onmouseout=function(){
	t=setInterval(move,2000);
}
//单击右键
rbtn.onclick=function(){
	move();
}
//单击左键
lbtn.onclick=function(){
	moveL();
}
function moveL(){
	num--;
	if(num<0){
		num=4;
	}
	for(let i=0;i<bannerimg.length;i++){
			bannerimg[i].style.zIndex=1;
			bannerdot[i].style.background="#B0B0B0";
		}
	bannerimg[num].style.zIndex=2;
	bannerdot[num].style.background="#FFFFFF";
}
//获取焦点和失去焦点
//window.onblur=function(){
//	clearInterval(t);
//}
//window.onfocus=function(){
//	t=setInterval(move,2000);
//}
//

let liststore=document.querySelectorAll(".list-store a");
let menuposition=document.querySelector(".menuPosition");
for(let i=0;i<liststore.length;i++){
	liststore[i].onmouseover=function(){
		menuposition.style.height="220px";
	}
	menuposition.onmouseover=function(){
		menuposition.style.height="220px";
	}
	liststore[i].onmouseout=function(){
		menuposition.style.height="0";
	}
	menuposition.onmouseout=function(){
		menuposition.style.height="0";
	}
}




//小轮播