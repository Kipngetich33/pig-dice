// Business Logic
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
		alert ("You rolled a 1,turn for player2");
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

// this are functions for player 2
Players.prototype.rollFunction2= function(){
	roll2 = Math.floor(Math.random()*6) +1;
	this.roll=roll2;
	if (this.roll===1){
		turnsSecond.push(0);
		totalSecond+=this.roll;
		alert ("You rolled a 1,turn for player1");
	}
	else{
	turnsSecond.push(this.roll);
	totalSecond+=this.roll;
	return this.roll;
	}
}
Players.prototype.scoreFunction2= function(){
	var total4=0;
	for(var turn in turnsSecond) { total4 += turnsSecond[turn]; }
	this.score= total4;
	return this.score;
	}

player1= new Players();
player2= new Players();

$(document).ready(function(){

// this function still needs to be worked on it does not append names
    $("#nameInput#btn-start").submit(function(event){
    	event.preventDefault();

    	var name= $("#player1").val();
    	console.log(name);
    });
	


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

		if (totalScore>=100){
			alert ("player 1 has Wins");
		} else{
		$("#totalScore1-value").text(player1.score);
		}

	});

// these are buttons for player2
   $("#play-green-2").click(function(event){
		event.preventDefault();

		rollvalue2=player2.rollFunction2();
		console.log(player2.roll);

		$("#rollScore2-value").text(rollvalue2);
	});

	$("#play-red-2").click(function(event){
		event.preventDefault();
		var totalScore=player2.scoreFunction2();
		console.log(totalScore);

		if (totalScore>=100){
			alert ("player 2 has Wins");
		}
		else{
			$("#totalScore2-value").text(totalScore);
		}

	});
});