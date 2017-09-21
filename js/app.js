$(function() {

var score;
var	allScores = [];
var	hitPoints;
var loss;
var beginGame;
var highScore = 0;
var highScore2 = 0;
var highScore3 = 0;
var animatespeed = 1500;
var enemyRespawn = 3200;
var enemyLifeSpan = 3000;
var playerName = $("#playerNameBox");

///Attempt proper 2 player mode
///Difficulty settings. (Could be done by adding 2 new start buttons
/// and setting the animate respawn and lifespan speed in there maybe?)
	
	//These functions are the only ones that are called outside of everything else as they control the rest of the code.
	toggleDiv();
	startGame();


	function toggleDiv() {
		//when clicking leaderboard or instructions it will hide every other div on the page
		//Also used toggle to the user could click the same button twice to show and hide the div
		//Also gives a nice effect when hiding and showing the divs. 
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
		//On click of the start button or the retry button on the game over screen run loadcheck funtion
		$("#startButton").click(function(){
			loadCheck()

		});

		$("#retryButton").click(function(){
			loadCheck()
		});
	}

	function loadCheck(){
		//force user to pick name or game won't load (used for highscores)
		if (playerName.val() === ""){
				alert("Please chose a name");
			} else {
				///Hide start button and load the functions that control the game
				$("#startButton").hide();	
				setScoreHP();
				hideDiv();
				enemiesFunc();
				playSniper();
				//Without reseting here it keeps the same numbers from the previous round.
				animatespeed = 1500;
				enemyRespawn = 3200;
				enemyLifeSpan = 3000;
			}
	}

	function enemiesFunc() {
		///at a set interval run continuosly run these statements
		beginGame = setInterval(function(){
			for(i=0; i<1; i++) {
				///selecting random  numbers for how the enemy moves and height it starts at
				///Changes each time
				length1 = 60 + Math.floor(Math.random() * 30) + 1;
				length2 = Math.floor(Math.random() * 30) + 1;
				height1 = Math.floor(Math.random() * 43) + 1;
				height2 = Math.floor(Math.random() * 43) + 1;
				marginHeight = Math.floor(Math.random() * 25) + 1;
				///Put enemy div onto the body to load it
        		$("<div class='enemies' id='enemy'></div>").appendTo('body');
        		///adding the margin to enemy to randomize starting height
        		$("#enemy").css("margin-top", marginHeight + "%");
        		
				timeEnemies();
				killEnemies();
				enemyAnimate();
			}
		}, enemyRespawn); ///The length of time of the interval 
	}	

	function timeEnemies(){
		///function if a player fails to click the enemy
		loss = setTimeout(function() {
			///after timeout remove enemy, 
			///change player hp div to red and then back after .2seconds
			$("#enemy").remove();
			$(".playerHP").css("background-color","red") 
			setTimeout(function(){
				$(".playerHP").css("background-color","#9BA0BC");
			},200);
			///remove 1 from player hit points and change the number on the div
			hitPoints --;
			$(".playerHP").html("Health: " +hitPoints);
			///If hit points drop to 0 show game over end the game and reshow the start button
			if (hitPoints === 0){
				$("#gameOver").show();
				$("#startButton").show();
				clearTimeout(beginGame);
				highScores();///Load the highscore funtion to to append scores to leaderboard
			}
		}, enemyLifeSpan);///The length of the timeout
	}
		
	function killEnemies(){
		$("#enemy").click(function(){
			///if clicked remove enemy.
			$("#enemy").remove();
			///change font size to show player they have scored for .2 seconds
			$(".playerScore").css("font-size","2em") 
			setTimeout(function(){
				$(".playerScore").css("font-size","1.2em");
			},200);
			///Add Score, and decrease others to increase the speed enemies come. 
			score += 100;
			animatespeed -=50;
			enemyRespawn -=100;
			enemyLifeSpan -=100;
			///Append score to scoreboard div
			$(".playerScore").html("Score: " +score);
			///Clear loss timer so it doesn't remove a life
			clearTimeout(loss);
			///Call sniper noise function so it plays when an enemy has been clicked. 
			playSniper();
		});	
	}

	function enemyAnimate() {
		/// take random numbers to tell the enemy how far to move in both directions and how fast with animatespeed.
	    $("#enemy").animate({left: length1 + "%", top: height1 + "%"}, animatespeed);
	    $("#enemy").animate({left: length2 + "%", top: height2 + "%"}, animatespeed);		
	}

	function hideDiv(){
		///Hide all divs (used when starting game)
		$(instructions).hide();
		$(leaderboard).hide();
		$(gameOver).hide();
	}

	function setScoreHP(){
		///Reset scores when the game begins also resets the divs back
		score = 0;
		hitPoints = 3;
		$(".playerHP").html("Health: " +hitPoints);
		$(".playerScore").html("Score: " +score);
	}

	function playSniper(){
		///Audio functions
		var sniperSound = $("#sniperShot")[0];

		sniperSound.play();
	}

	function highScores(){
		///Pushes score and player name into object containing 2 arrays
		allScores.push({name: playerName.val(), oScore: score});
		///Sort the scores in the array from largest to smallest
		allScores.sort(function(a, b) {
  			return b.oScore - a.oScore;
  		});

		///Slice to only show top 3 scores
  		var leaderboardScores = allScores.slice(0,3);
  		///empty leaderboard each time
  		$("#leaderboard ol").empty();
  		///Loops through the object and prints the player name and score as an li in the leaderboard ol.
  		for (var i = 0; i < leaderboardScores.length; i++) {
  			var highScore = i+1 + ": " + allScores[i].name + "-" + allScores[i].oScore;
  			$("#leaderboard ol").append($("<li></li>").html(highScore));
  		}
		
	}

});