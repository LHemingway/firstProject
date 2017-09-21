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

	toggleDiv();
	startGame();


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
		$("#startButton").click(function(){
			loadCheck()

		});

		$("#retryButton").click(function(){
			loadCheck()
		});
	}

	function loadCheck(){
		if (playerName.val() === ""){
				alert("Please chose a name");
			} else {
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
		beginGame = setInterval(function(){
			for(i=0; i<1; i++) {
				length1 = 60 + Math.floor(Math.random() * 30) + 1;
				length2 = Math.floor(Math.random() * 30) + 1;
				height1 = Math.floor(Math.random() * 43) + 1;
				height2 = Math.floor(Math.random() * 43) + 1;
				marginHeight = Math.floor(Math.random() * 25) + 1;

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
			$(".playerHP").css("background-color","red") 
			setTimeout(function(){
				$(".playerHP").css("background-color","#F5FBEF");
			},200);
			hitPoints --;
			$(".playerHP").html("Health: " +hitPoints);
			if (hitPoints === 0){
				$("#gameOver").show();
				$("#startButton").show();
				clearTimeout(beginGame);
				highScores();	
				console.log(allScores);
			}
		}, enemyLifeSpan);
	}
		
	function killEnemies(){
		$("#enemy").click(function(){
			$("#enemy").remove();
			$(".playerScore").css("font-size","2em") 
			setTimeout(function(){
				$(".playerScore").css("font-size","1.2em");
			},200);
			score += 100;
			animatespeed -=50;
			enemyRespawn -=100;
			enemyLifeSpan -=100;
			$(".playerScore").html("Score: " +score);
			clearTimeout(loss);
			playSniper();
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

	function playSniper(){
		var sniperSound = $("#sniperShot")[0];

		sniperSound.play();
	}

	function highScores(){
		allScores.push({name: playerName.val(), oScore: score});
		allScores.sort(function(a, b) {
  			return b.oScore - a.oScore;
  		});

  		var leaderboardScores = allScores.slice(0,3);
  		$("#leaderboard ol").empty();
  		for (var i = 0; i < leaderboardScores.length; i++) {
  			var highScore = i+1 + ": " + allScores[i].name + "-" + allScores[i].oScore;
  			$("#leaderboard ol").append($("<li></li>").html(highScore));
  		}
		
	}







});