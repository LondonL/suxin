function littlemove(btnL,btnR,bookroll,bookwidths){
let res=0;
btnL.onclick=function(){
	res--;
	if(res<0){
		res=0;
	}
	bookroll.style.transform="translateX("+(-bookwidths*res)+"px)";
	for(let j=0;j<dot.length;j++){
		dot[j].style.background="#B0B0B0";
	}
	dot[res].style.background="#FF6700";
}

btnR.onclick=function(){
	res++;
	if(res>2){
		res=2;
	}
	bookroll.style.transform="translateX("+(-bookwidths*res)+"px)";
	for(let j=0;j<dot.length;j++){
		dot[j].style.background="#B0B0B0";
	}
	dot[res].style.background="#FF6700";
	
	
	let t=setInterval(move,2000);
	function move(){
		
	
}
