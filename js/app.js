$(function() {

var score = 0;
var hitPoints = 3;
var loss;
var beginGame

	toggleDiv();
	startGame();
	// killEnemies();
	
///Put enemies around the map in an array and load them randomly

	function toggleDiv() {
		$(navLeaderboard).click(function(){
			$(leaderboard).toggle("slow"); 
			$(instructions).hide();
		});
		
		$(navIntructions).click(function(){
			$(instructions).toggle("slow"); 
			$(leaderboard).hide();
		});
	}

	function startGame(){
		$("#navHome").click(function(){
			console.log("Hi")
			// $(this).hide();
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
				console.log("HP " + hitPoints);
				if (hitPoints == 0){
					$("#gameOver").show;
					clearTimeout(beginGame);
				}
			}, 2000);
	}
		
	function killEnemies(){
		$("#enemy").click(function(){
			// if(true){
				$("#enemy").remove();
				score ++;
				console.log("Score" + score)
				clearTimeout(loss);
		});	

	}


	



})