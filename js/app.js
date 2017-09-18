$(function() {

var score = 0;
var hitPoints = 3;

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
		$("#startButton").click(function(){
			console.log("Hi")
			$(this).hide();
			killEnemies();
		});
	}





	function killEnemies() {

		setInterval(function(){
			for(i=0; i<1; i++) {
         $("<div class='enemies' id='enemy'>").appendTo('body');
    
			$("#enemy").show();
			setTimeout(function() {
				$("#enemy").css("background-color", "red");
			}, 2000);
			var loss = setTimeout(function() {
				$("#enemy").remove();
				hitPoints --;
				console.log("HP " + hitPoints);
				if (hitPoints == 0){
					alert("game over");
				}
			}, 3000);
			$("#enemy").click(function(){
			// if(true){
				$("#enemy").remove();
				score ++;
				console.log("Score" + score)
				clearTimeout(loss);
		});	
			}
		}, 5000);
		
	}	

		
	



})