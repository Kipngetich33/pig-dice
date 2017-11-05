//Business Logic Section

//Create a constructor players
function Players(turnTotal){
	this.turnTotal=turnTotal;
}

function randomNumbers (){
	var randnum=Math.floor(Math.random()*6+1);
	turnTotal= randnum;
	return turnTotal;
}

function totalScore(randnum){
    var totalScore=0;
    // randnum= randomNumbers();

	if (randnum===1){
		return totalScore =0;
         }
    else if (randnum===2){
		return totalScore +=2;
         }
    else if (randnum===3){
		return totalScore +=3;
         }
    else if (randnum===4){
		return totalScore +=4;
         }
    else if (randnum===5){
		return totalScore +=5;
         }
    else{
		return totalScore +=6;
         }
}
function rollScore(randnum){
	if (randnum===1){
		return totalScore =0;
         }
    else if (randnum===2){
		return rollScore=2;
         }
    else if (randnum===3){
		return rollScore=3;
         }
    else if (randnum===4){
		return rollScore=4;
         }
    else if (randnum===5){
		return rollScore=5;
         }
    else{
		return rollScore=6;
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
//this section collects names of the players from the form

	// 	var name1=$("#player1").val();
	// 	var name2=$("#player2").val();
	// 	var player1=new Players(name1)
	// 	var player2=new Players(name2)
	// 	console.log("ok");

	// $("#player1-append").text(player1.name)
	// $("#player2-append").text(player2.name)

	//hide the top section in order to pull up the player cards
	// $("#top").slideToggle();

	// hide ul with game rules and players form
	$("ul#rules").hide();
	$("form#form-group").hide();
    
//show the hidden buttons show-rules, Restart-players ,Exit-players
	$("button#show-rules").show();
	$("button#Restart-players").show();
	$("button#Exit-players").show();
	console.log("ok");
	});

	$("button#play-green").click(function(event){
		event.preventDefault();
		player1 =new Players(randomNumbers());
		$("#rollScore1-value").text(player1.turnTotal);
		// $("#turnScore1-value").text(turnTotal);
	});

	$("button#play-red").click(function(event){
		event.preventDefault();

		// $("#rollScore2-value").text(totalScore);
		$("#turnScore1-value").text(totalScore);
	});
    
    $("#play1-game-green").click(function(event){
    	event.preventDefault();
    	window.open();

    });
    $("#play1-game-red").click(function(event){
    	event.preventDefault();
    	window.close();
    });

    //buttons to unhide the rules, top row and the form
    $("button#show-rules").click(function(event){
    	event.preventDefault();
    	$("ul#rules").slideToggle();

    });
    $("button#Restart-players").click(function(event){
	event.preventDefault();
	$("form#form-group").slideToggle();
	$("#top").slideToggle();
    });
});