class EnemyPositions {
	constructor() {
		this.positions = [];
	}
}

// class enemyPosition {
// 	constructor(id, position) {
// 		this.id = null;
// 		this.position = position;
// 	}
// }

class Enemy {
	constructor(id, position) {
		this.id = id;
		this.position = position;
	}
	render(positions) {
		const parent = document.getElementById("enemy-area");
		const node = document.createElement("div");
		node.setAttribute("class", "enemy");
		node.setAttribute("id", this.id);
		node.style.top = `${this.position.y}px`;
		node.style.right = `${this.position.x}%`;

		parent.appendChild(node);

		const obj = {
			id: this.id,
			x: this.position.x,
			y: this.position.y,
		};

		positions.push(obj);
	}
}

// class enemyLoop {
// 	constructor(loopedFunc, id, position, condition) {
// 		this.loopedFunc = loopedFunc;
// 		this.id = id;
// 		this.position = position;
// 		this.condition = condition;
// 	}

// 	startLoop() {
// 		this.timer = setInterval(
// 			this.loopedFunc.bind(this, this.id, this.position, this.condition)
// 		);
// 	}
// }

export default class enemyLogic extends EnemyPositions {
	constructor(borders) {
		super();
		this.borders = borders;
		this.numOfWins = 0;
		this.enemySpeed = 250;
	}

	enemyInfo() {
		console.log(this.positions);
	}

	renderEnemies(num) {
		let pos = { x: 0, y: 0 };

		const resetY = () => {
			return (pos.y = 0);
		};

		const newLine = (i) => {
			let return_val;
			if (i / 10 === 1) return_val = 1;
			else if (i / 20 === 1) return_val = 1;
			else if (i / 30 === 1) return_val = 1;
			else return_val = 0;
			return return_val;
		};

		for (let i = 0; i < num; i++) {
			const enemy = new Enemy(`enemy-${i + 1}`, {
				x: pos.x,
				y: pos.y,
			});

			pos.y += 50;

			const handleNewLine = newLine(i + 1);
			// console.log(handleNewLine);
			if (handleNewLine === 1) {
				// console.log("making new line");
				pos.x += 5;
				resetY();
			}
			enemy.render(this.positions);
		}
	}

	reset() {
		this.numOfWins = 0;
		return (this.positions = []);
	}

	// moveEnemy({ x, y }, speed) {
	// 	const id = `${x},${y}`;
	// 	const index = this.positions.findIndex(
	// 		(obj) => obj.x == x && obj.y == y
	// 	);

	// 	const filteredEnemy = this.positions.filter(
	// 		(enemy) => enemy.x === x && enemy.y === y
	// 	);
	// 	// console.log(filteredEnemy[0]);

	// 	this.handleHitPlayer(filteredEnemy[0], {
	// 		x: filteredEnemy[0].x,
	// 		y: filteredEnemy[0].y,
	// 	});

	// 	// console.log(document.getElementById(id));
	// 	filteredEnemy[0].x += speed;

	// 	document.getElementById(id).style.right = `${filteredEnemy[0].x}%`;
	// 	let enemy;
	// 	if (index === 0) {
	// 		// adds enemy back into array
	// 		enemy = this.enemyPositions.splice(
	// 			index,
	// 			index + 1,
	// 			filteredEnemy[0]
	// 		);
	// 	} else {
	// 		enemy = this.enemyPositions.splice(index, index, filteredEnemy[0]);
	// 	}

	// 	console.log(this.enemyPositions);
	// }
}
