//Business Logic
function Player(name,turnTotal,totalScore){
	this.name=name;
	this.turnTotal=turnTotal;
	this.totalScore=totalScore;
}

var turnTotal=0;

function results(randnum){
	if (randnum===1){
		return turnTotal=0;
         }
    else if{
    	return turnTotal+=randnum;
    }
}

function winner(){
	if (turnTotal===100){
		return "winner"
	}else{
		return turnTotal;
	}
}

//user Interfac