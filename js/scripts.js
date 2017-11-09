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

<<<<<<< HEAD
// this section function will help in calculating the score
Players.prototype.totalScoreDeterminant=function(){
	this.totalScore+=this.turnTotal;
	return this.totalScore;

=======
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
<<<<<<< HEAD
	var player1;
	var player2;
	var subTotal;
	$("form#nameInput").submit(function(event){
		event.preventDefault();
		console.log("hi")	
		var nameOfPlayer1= $("#player1").val();
		var nameOfPlayer2= $("#player2").val();
		console.log(nameOfPlayer1);
=======
>>>>>>> master
=======
>>>>>>> master

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
<<<<<<< HEAD
		console.log("ok");

	
	    $("#totalScore1-value").text("ok");
	    $("#rollScore1-value").text("ok");

	    // debugger
		//var turnOutput1= player1.randomNumi();
		// console.log (turnOutput1);
		$("#rollScore1-value").text(player1.randomNumi());
		$("#totalScore1-value").text(player1.totalScoreDeterminant());
		
		// if (player1.turnOutput1===1){
			
		//     $("#totalScore1-value").text(player1.totalScore);
		// }else{
		// 	$("#totalScore1-value").text(player1.totalScore);	
		// }
=======
		var totalScore=player1.scoreFunction();
		console.log(totalScore);
>>>>>>> master

		if (totalScore>=100){
			alert ("player 1 has Wins");
		} else{
		$("#totalScore1-value").text(player1.score);
		}

	});

<<<<<<< HEAD
// This section is for the hold button for player1
	$("#play-red-1").click(function(event){
		event.preventDefault();
        debugger;
		console.log("button-hold-1");
		var total3= player1.totalScoreDeterminant();
		$("#totalScore1-value").text(total3);

	});


// This section is for the second player

	$("#play-green-2").click(function(event){
		event.preventDefault();
		console.log("ok");

	
	    $("#totalScore2-value").text("ok");
	    $("#rollScore2-value").text("ok");

	    // debugger
		var turnOutput2= player2.randomNumi();
		// console.log (turnOutput1);
		var total3= totalScoreDeterminant();
		$("#rollScore2-value").text(player2.turnTotal);
		$("#totalScore2-value").text(total3);
		
		// if (player1.turnOutput1===1){
			
		//     $("#totalScore1-value").text(player1.totalScore);
		// }else{
		// 	$("#totalScore1-value").text(player1.totalScore);	
		// }
=======
// these are buttons for player2
   $("#play-green-2").click(function(event){
		event.preventDefault();
>>>>>>> master

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