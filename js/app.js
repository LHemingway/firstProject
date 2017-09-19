$(function() {

var score;
var	hitPoints;
var loss;
var beginGame;
var animatespeed = 1500;
var enemyRespawn = 3200;
var enemyLifeSpan = 3000;
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
		$("#navSingle").click(function(){
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
				console.log(animatespeed);
				console.log(enemyRespawn);
				console.log(enemyLifeSpan);
			}
		}, enemyRespawn);
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
	};


	function setScoreHP(){
		score = 0;
		hitPoints = 2;
		$(".playerHP").html("Health: " +hitPoints);
		$(".playerScore").html("Score: " +score);
	}
	
})