//Business Logic Section

//Create a constructor players
function Players(playerName,turnTotal,totalScoreValue){
	this.playerName= playerName;
	this.turnTotal=turnTotal;
	this.totalScoreValue=totalScoreValue;
}

Players.prototype.randomNumbers= function(){
	var randnum=Math.floor(Math.random()*6)+1;
	if (randnum===1){
		this.turnTotal=0;
	}
	else{
		this.turnTotal=this.turnTotal+randnum;
	}
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

		var player1= new Players(nameOfPlayer1,0,0);
		var player2= new Players(nameOfPlayer2,0,0);
		console.log("ok");
         
        console.log(player1.playerName);
		$("#player1-append").text(nameOfPlayer1);
		$("#player2-append").text(nameOfPlayer2);
		console.log("ok");

		$("#play-green-1").click(function(event){
			event.preventDefault();
			console.log("ok");
			debugger

			var turnOutput1= player1.randomNumbers();
			if (turnOutput1===1){
				$("#rollScore1-value").text(turnOutput1);
				$("#totalScore1-value").text(player1.turnScore);
			}


		});
		
	});

});


