//Business Logic
function Players(name,turnTotal,totalScore){
	this.name=name;
	this.turnTotal=turnTotal;
	this.totalScore=totalScore;
}

function randomNumbers (){
	math.rand();
}

function results(randnum){
	if (randnum===1){
		return turnTotal=0;
         }
    else {
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
		console.log("ok");
		var name1=$("#player1").val();
		var name2=$("#player2").val();
		var player1=new Players(name1)
		var player2=new Players(name2)
		console.log("ok");

	$("h3#player1-append").append(player1.name)
	$("h3#player2-append").append(player2.name)
	console.log("ok");
	});

	$("button#play-green").click(function(event){
		event.preventDefault();
		alert (randomNumbers());
	});

	$("button#play-red").click(function(event){
		event.preventDefault();

		$("#rollScore2").text(turnTotal);
	});


});