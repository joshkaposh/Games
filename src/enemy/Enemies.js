import Game from "../game.js";
const game = new Game();
export default class Enemies {
	constructor(enemyCount) {
		this.enemyCount = enemyCount;
		this.enemyArray = [];
	}

	render() {
		let marginTop = 0;
		for (let index = 0; index < this.enemyCount; index++) {
			const node = document.createElement("div");
			node.setAttribute("class", "enemy");
			node.setAttribute("id", `enemy-${marginTop}`);
			this.enemyArray.push(index * 50);
			document.getElementById("enemy-area").appendChild(node);
			node.style.top = marginTop + "px";
			marginTop += 50;
		}
	}

	removeEnemy(id, y) {
		const enemy = document.getElementById(`enemy-${id}`);

		if (enemy.style.display === "none") {
			return;
		} else {
			enemy.style.display = "none";
			this.enemyArray.splice(y, 1);
		}

		if (this.enemyArray.length === 0) {
			// Ends game when player shoots last enemy
			// Todo: get for loop into game class
			console.log(this);

			game.restart(this.enemyArray);
		}
	}
}
