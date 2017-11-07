//Business Logic Section

//Create a constructor players
function Players(playerName,turnTotal,totalScoreValue){
	this.playerName= playerName;
	this.turnTotal=turnTotal;
	this.totalScoreValue=totalScoreValue;
}
var randnum=Math.floor(Math.random()*6)+1;


Players.prototype.randomNumi= function(){
	if (randnum===1){
		this.turnTotal=0;
	}
	else{
		this.turnTotal=this.turnTotal+randnum;
	};
	return this.turnTotal;
}

// this section function will help in calculating the score
Players.prototype.totalScoreDeterminant=function(){
	this.totalScore=this.turnTotal + this.totalScore;
	this.turnScore=0;
}

//User Interface

$(document).ready(function(){
	$("form#nameInput").submit(function(event){
		event.preventDefault();
		console.log("hi")	
		var nameOfPlayer1= $("#player1").val();
		var nameOfPlayer2= $("#player2").val();
		console.log(nameOfPlayer1);

		player1= new Players(nameOfPlayer1,0,0);
		player2= new Players(nameOfPlayer2,0,0);
		console.log("ok");

		$("#player1-append").text(nameOfPlayer1);
		$("#player2-append").text(nameOfPlayer2);
		console.log("ok");

		$("#rules").slideToggle();
		$("#player1").slideToggle();
		$("#player2").slideToggle();
		$("#top").slideToggle();


	});

		$("#play-green-1").click(function(event){
		event.preventDefault();
		console.log("ok");

		debugger;
	
	    $("#totalScore1-value").text("ok");
	    $("#rollScore1-value").text("ok");

		var turnOutput1= player1.randomNumi();
		console.log(turnOutput1);
		if (turnOutput1===1){
			$("#rollScore1-value").text(turnOutput1);
			$("#totalScore1-value").text(player1.turnScore);
		}else{
			$("#totalScore1-value").text(player1.totalScore);
		}


	});
		

});


