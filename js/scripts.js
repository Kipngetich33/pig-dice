var player1;
var player2;



function Players(roll,turn,score){
	this.roll=roll;
	this.turn= turn;
	this.score= score;
}

var turns=[];
var roll=0;
var turn=0;
var total= 0;
var score1= 0;

var turnsSecond=[];
var rollSecond=0;
var turnSecond=0;
var totalSecond= 0;
var score1Second= 0;

// this are functions for player1
Players.prototype.rollFunction= function(){
	roll1 = Math.floor(Math.random()*6) +1;
	this.roll=roll1;
	if (this.roll===1){
		turns.push(0);
		total+=this.roll;
	}
	else{
	turns.push(this.roll);
	total+=this.roll;
	return this.roll;
	}
}
Players.prototype.scoreFunction= function(){
	var total3=0;
	for(var turn in turns) { total3 += turns[turn]; }
	this.score= total3;
	return this.score;
	}


player1= new Players();
player2= new Players();

$(document).ready(function(){
	$("#play-green-1").click(function(event){
		event.preventDefault();

		rollvalue=player1.rollFunction();
		console.log(player1.roll)

		$("#rollScore1-value").text(rollvalue);
	});

	$("#play-red-1").click(function(event){
		event.preventDefault();
		var totalScore=player1.scoreFunction();
		console.log(totalScore);

		$("#totalScore1-value").text(player1.score);

	});

// these are buttons for player2
   $("#play-green-2").click(function(event){
		event.preventDefault();

		rollvalue2=player2.rollFunction();
		console.log(player2.roll);

		$("#rollScore2-value").text(rollvalue2);
	});

	$("#play-red-2").click(function(event){
		event.preventDefault();
		var totalScore=player1.scoreFunction();
		console.log(totalScore);

		$("#totalScore2-value").text(player2.score);

	});
});