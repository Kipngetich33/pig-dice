//Business Logic
function Players(name,turnTotal,totalScore){
	this.name=name;
	this.turnTotal=turnTotal;
	this.totalScore=totalScore;
}

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

//user Interface
$(document).ready(function(){
	var totalScore=0;
	var turnTotal=0;

	$("form#form-group").submit(function(event){
		event.preventDefault();
		var name=$("player1").val();
		var player1=new Players(name)

	$("#player1-append").append(player1.name)
	});


});