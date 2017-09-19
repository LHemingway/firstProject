$(function() {

var score;
var	hitPoints;
var loss;
var beginGame;
var animatespeed = 1500;
var distance;
var marginHeight;
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
			setScoreHP();
			hideDiv();
			enemiesFunc();
		});

		$("#retryButton").click(function(){
			setScoreHP();
			hideDiv();
			enemiesFunc();
		});
	}

	function enemiesFunc() {

		beginGame = setInterval(function(){
			for(i=0; i<1; i++) {
				distance = 60 + Math.floor(Math.random() * 40) + 1;
				distance2 = Math.floor(Math.random() * 30) + 1;
				marginHeight = Math.floor(Math.random() * 43) + 1;
				console.log(distance , distance2);
        		$("<div class='enemies' id='enemy'></div>").appendTo('body');
        		$("#enemy").css("margin-top", marginHeight + "%");
    			
				timeEnemies();
				
				killEnemies();
				enemyLeft();
				console.log(animatespeed);
			}
		}, 3200);
	}	

	function timeEnemies(){
		// setTimeout(function() {
		// 	$("#enemy").css("background-color", "red");
		// }, 2200);

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
			$("#enemy").remove();
			score += 100;
			animatespeed -=50;
			$(".playerScore").html("Score: " +score);
			clearTimeout(loss);
		});	
	}

	function enemyLeft() {
		for(i=0; i<1; i++) {
	    $("#enemy").animate({left: distance + "%"}, animatespeed);
	    $("#enemy").animate({left: distance2 + "%"}, animatespeed);
		}
	}

	function hideDiv(){
		$(instructions).hide();
		$(leaderboard).hide();
		$(gameOver).hide();
	};


	function setScoreHP(){
		score = 0;
		hitPoints = 2;
		$(".playerHP").html("Health: " +hitPoints);
		$(".playerScore").html("Score: " +score);
	}
	
})