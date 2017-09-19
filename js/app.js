$(function() {

var score;
var	hitPoints;
var loss;
var beginGame;
var animatespeed = 2000;
var distance;
// var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
// var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

	toggleDiv();
	startGame();
	
///animation translation and random 
///Make duck hunt basically
///animate it moving across the screen from random spots

	function toggleDiv() {

		$(navLeaderboard).click(function(){
			$(leaderboard).toggle(""); 
			$(instructions).hide();
			$(gameOver).hide();
		});
		
		$(navIntructions).click(function(){
			$(instructions).toggle(""); 
			$(leaderboard).hide();
			$(gameOver).hide();
		});
	}

	function startGame(){
		$("#navHome").click(function(){
			score = 0;
			hitPoints = 2;
			console.log("StartedHome");
			hideDiv();
			enemiesFunc();
		});

		$("#retryButton").click(function(){
			console.log("StartedBtn");
			score = 0;
			hitPoints = 1;
			hideDiv();
			enemiesFunc();
		});
	}

	function enemiesFunc() {

		beginGame = setInterval(function(){
			for(i=0; i<1; i++) {
				timeEnemies();
        		$("<div class='enemies' id='enemy'></div>").appendTo('body');
    			distance = Math.floor(Math.random() * 90) + 1;
				
				$("#enemy").show();
				killEnemies();
				enemyLeft();
			}
		}, 3000);
	}	

	function timeEnemies(){
		setTimeout(function() {
			$("#enemy").css("background-color", "red");
		}, 2500);

		loss = setTimeout(function() {
			$("#enemy").remove();
			hitPoints --;
			$(".playerHP").html("Health: " +hitPoints);
			console.log("HP " + hitPoints);
			if (hitPoints === 0){
				$("#gameOver").show();
				clearTimeout(beginGame);
			}
		}, 3000);
	}
		
	function killEnemies(){
		$("#enemy").click(function(){
			// if(true){
			$("#enemy").remove();
			score += 500;
			// animatespeed -=200;
			$(".playerScore").html("Score: " +score);
			clearTimeout(loss);
		});	
	}

	function enemyLeft() {
	    $("#enemy").animate({left: distance + "%", height: "290px"}, animatespeed);
	    // $("#enemy").animate({left: "42%", width: "290px"}, "fast");
	    // $("#enemy").animate({left: "-=300"}, 1000);
	}

	function hideDiv(){
		$(instructions).hide();
		$(leaderboard).hide();
		$(gameOver).hide();
	};
	
})