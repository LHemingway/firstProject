$(function() {

var score
var	hitPoints
var loss;
var beginGame

	toggleDiv();
	startGame();
	createGrid();
	// killEnemies();
	
///Put enemies around the map in an array and load them randomly

	function createGrid() {
		for(i=0; i<64; i++) {
        		$("<div class='grid'>").appendTo('body');
        	}
	}

	function toggleDiv() {

		$(navLeaderboard).click(function(){
			$(leaderboard).toggle("slow"); 
			$(instructions).hide();
			$(gameOver).hide();
		});
		
		$(navIntructions).click(function(){
			$(instructions).toggle("slow"); 
			$(leaderboard).hide();
			$(gameOver).hide();
		});
	}

	function startGame(){
		$("#navHome").click(function(){
			score = 0;
			hitPoints = 3;
			console.log("StartedHome");
			hideCrap();
			enemiesFunc();
		});

		$("#retryButton").click(function(){
			console.log("StartedBtn");
			score = 0;
			hitPoints = 3;
			hideCrap();
			enemiesFunc();
		});
	}


	function enemiesFunc() {

		beginGame = setInterval(function(){
			for(i=0; i<1; i++) {
        		$("<div class='enemies' id='enemy'>").appendTo('body');

    			
				$("#enemy").show();
				timeEnemies();
				killEnemies();
						}
		}, 3000);
		
	}	

	function timeEnemies(){
		setTimeout(function() {
			$("#enemy").css("background-color", "red");
		}, 1000);

		loss = setTimeout(function() {
			$("#enemy").remove();
			hitPoints --;
			$(".playerHP").html("Health: " +hitPoints);
			console.log("HP " + hitPoints);
			if (hitPoints === 0){
				$("#gameOver").show();
				clearTimeout(beginGame);
			}
		}, 2000);
	}
		
	function killEnemies(){
		$("#enemy").click(function(){
			// if(true){
			$("#enemy").remove();
			score ++;
			$(".playerScore").html("Score: " +score);
			clearTimeout(loss);
		});	
	}

	function hideCrap(){
		$(instructions).hide();
		$(leaderboard).hide();
		$(gameOver).hide();
	};
	



})