$(function() {

var score;
var highScore = 0;
var	hitPoints;
var loss;
var beginGame;
var animatespeed = 1500;
var enemyRespawn = 3200;
var enemyLifeSpan = 3000;
var playerName = $("#playerNameBox");
	toggleDiv();
	startGame();
	console.log(playerName);
///animation translation and random 
///Make duck hunt basically
///animate it moving across the screen from random spots

///Fix going off screen.
///attempt proper leader board
///attempt two player

///Allow user to chose player name!
///Set Player name to be what shows up on high score!
///Change cursor to like gun aim thing crosshair.


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
		$("#navSingle").click(function(){
			setScoreHP();
			hideDiv();
			enemiesFunc();
			console.log(playerName.val());
		});

		$("#retryButton").click(function(){
			setScoreHP();
			hideDiv();
			enemiesFunc();
		});

		// $("#navMulti").click(function(){

		// });
	}

	function enemiesFunc() {

		beginGame = setInterval(function(){
			for(i=0; i<1; i++) {
				length1 = 60 + Math.floor(Math.random() * 35) + 1;
				length2 = Math.floor(Math.random() * 30) + 1;
				height1 = Math.floor(Math.random() * 43) + 1;
				height2 = Math.floor(Math.random() * 43) + 1;
				marginHeight = Math.floor(Math.random() * 43) + 1;

				console.log(length1 , length2);
				console.log(height1, height2 );
        		$("<div class='enemies' id='enemy'></div>").appendTo('body');
        		$("#enemy").css("margin-top", marginHeight + "%");
    			
				timeEnemies();
				killEnemies();
				enemyAnimate();
			}
		}, enemyRespawn);
	}	

	function timeEnemies(){

		loss = setTimeout(function() {
			$("#enemy").remove();
			hitPoints --;
			$(".playerHP").html("Health: " +hitPoints);
			console.log("HP " + hitPoints);
			if (hitPoints === 0){
				$("#gameOver").show();
				clearTimeout(beginGame);
				if (score >= highScore) {
					highScore = score;
				$("#leaderboard ol").empty();	
				$("#leaderboard ol").append(playerName.val() + "<br/>" + highScore);
				console.log(playerName, highScore);
			}
			}
		}, enemyLifeSpan);
	}
		
	function killEnemies(){
		$("#enemy").click(function(){
			$("#enemy").remove();
			score += 100;
			animatespeed -=50;
			enemyRespawn -=100;
			enemyLifeSpan -=100;
			$(".playerScore").html("Score: " +score);
			clearTimeout(loss);
		});	
	}

	function enemyAnimate() {
	    $("#enemy").animate({left: length1 + "%", top: height1 + "%"}, animatespeed);
	    $("#enemy").animate({left: length2 + "%", top: height2 + "%"}, animatespeed);		
	}

	function hideDiv(){
		$(instructions).hide();
		$(leaderboard).hide();
		$(gameOver).hide();
	}

	function setScoreHP(){
		score = 0;
		hitPoints = 1;
		$(".playerHP").html("Health: " +hitPoints);
		$(".playerScore").html("Score: " +score);
	}
	
})