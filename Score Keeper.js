var p1display=document.getElementById("p1Display");
var p1score=0;
var p1button=document.getElementById("p1");
var p2display=document.getElementById("p2Display");
var p2score=0;
var p2button=document.getElementById("p2");
var reset=document.getElementById("reset");
var gameOver=false;
var winningscoredisplay=document.getElementById("winningScoreDisplay");
var input=document.querySelector("input");
var winningScore=5;
function resetdata(){
	p1display.textContent=p1score=0;
	p2display.textContent=p2score=0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver=false;
}
input.addEventListener("change",function(){
	this.value=Number(this.value);
	if(this.value<1)
		this.value=1;
	else if(this.value>50)
		this.value=50;
	winningscoredisplay.textContent=winningScore=Number(this.value);
	resetdata();
});
p1button.addEventListener("click",function(){
	if(!gameOver){
		p1display.textContent=++p1score;
		if(p1score===winningScore){
			gameOver=true;
			p1display.classList.add("winner");
		}
	}
});
p2button.addEventListener("click",function(){
	if(!gameOver){
		p2display.textContent=++p2score;
		if(p2score===winningScore){
			gameOver=true;
			p2display.classList.add("winner");
		}
	}
});
reset.addEventListener("click",function(){
	resetdata();
});