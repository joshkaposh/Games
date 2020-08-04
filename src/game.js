export default class Game {
	restart(arr) {
		//Ends game when player shoots last enemy
		alert("You Won!");
		for (let i = 0; i < 10; i++) {
			arr.push(i * 50);
			document.getElementById(`enemy-${i * 50}`).style.display = "block";
		}
		return arr;
	}
}

// Todo: make it so game has a player and enemies
// Needs to handle player position and enemy count
