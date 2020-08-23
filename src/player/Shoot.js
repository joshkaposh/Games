import EnemyLogic from "../enemy/enemyMovement.js";

class enemyMovement {
	constructor(positions, speed, enemySpeed, condition) {
		this.positions = positions;
		this.speed = speed;
		this.enemySpeed = enemySpeed;
		this.condition = condition;
		this.timer = "";
	}
	start() {
		this.timer = setInterval(
			moveEnemy.bind(this, this.positions, this.enemySpeed),
			this.speed
		);
	}
	reset(newPositions) {
		this.positions = newPositions;
		this.enemySpeed = 1;
		this.speed = 250;
	}

	updateSpeed(newSpeed) {
		this.speed = newSpeed;
	}
}

const enemyController = new EnemyLogic({ west: 97 });

enemyController.renderEnemies(20);
enemyController.enemyInfo();

const enemyMover = new enemyMovement(
	enemyController.positions,
	enemyController.enemySpeed,
	1,
	95
);
enemyMover.start();

function hitEnemy(projectilePosition, enemyPositions) {
	const xAxis = projectilePosition.x;
	const yAxis = projectilePosition.y;
	console.log(xAxis);
	const enemyToHit = enemyPositions.filter((obj) => {
		return obj.y === yAxis && obj.x === xAxis;
	});
	let enemy;
	if (enemyToHit[0]) {
		enemy = 1;
		removeEnemy(enemyToHit[0], enemyPositions);
	}
	return enemy;
}

function removeEnemy(enemy, enemyPositions) {
	const enemyToRemove = enemyPositions.filter((obj) => {
		return obj.x === enemy.x && obj.y === enemy.y;
	});

	for (let i = 0; i < enemyPositions.length; i++) {
		let obj = enemyPositions[i];
		if (obj === enemyToRemove[0]) {
			console.log("found enemy");
			// console.log(obj);
			// console.log(i);
			const node = document.getElementById(obj.id);
			node.parentNode.removeChild(node);
			enemyPositions.splice(i, 1);
		}
	}

	if (enemyPositions.length === 0) {
		enemyController.numOfWins++;

		enemyController.numOfWins <= 1
			? alert("You Win! Let's try it faster now...")
			: enemyController.numOfWins === 4
			? alert("I'm tired of losing. Imma yeet you on this one")
			: alert(
					`You Won ${enemyController.numOfWins} times! Let's go faster!`
			  );

		// console.log(enemyMover.enemySpeed);
		enemyMover.enemySpeed++;

		enemyController.renderEnemies(20);
		enemyController.enemyInfo();
	}
}

function hitPlayer(enemyPositions, enemySpeed, condition, timer) {
	console.log(enemySpeed);
	let isPlayerHit = false;
	enemyPositions.forEach((enemy) => {
		if (enemy.x >= condition) {
			clearInterval(timer);
			isPlayerHit = true;
		} else {
			enemy.x += enemySpeed;
			document.getElementById(enemy.id).style.right = `${enemy.x}%`;
		}
	});
	return isPlayerHit;
}

function moveEnemy(enemyPositions) {
	console.log(this);
	const isPlayerHit = hitPlayer(
		enemyPositions,
		this.enemySpeed,
		this.condition,
		this.timer
	);
	if (isPlayerHit) {
		alert("Game Over. You Lose");
		enemyPositions.forEach((enemy) => {
			const node = document.getElementById(enemy.id);
			node.parentNode.removeChild(node);
		});
		enemyController.reset();

		enemyController.renderEnemies(20);
		enemyController.enemyInfo();
		enemyMover.reset(enemyController.positions);
		enemyMover.start();
	}
}

let bulletCount = 0;
// Removing/adding bullets

class ProjectileLoop {
	constructor(loopedFunction, id, position, condition) {
		this.loopedFunction = loopedFunction;
		this.id = id;
		this.position = position;
		this.condition = condition;
	}
	startLoop() {
		this.timer = setInterval(
			this.loopedFunction.bind(
				this,
				this.id,
				this.position,
				this.condition
			),
			5
		);
	}
}

class ProjectilePosition {
	constructor(pos) {
		this.pos = pos;
	}
}
class Projectile {
	constructor(position) {
		this.position = position;
	}

	getStats() {
		console.log(`position: ${this.position.x},${this.position.y}`);
	}

	render(bulletNum) {
		const node = document.createElement("div");
		node.setAttribute("class", "projectile");
		node.setAttribute("id", `bullet-${bulletNum}`);
		node.style.top = `${this.position.y + 20}px`;
		document.getElementById("grid").appendChild(node);
	}

	start(bulletCount) {
		const id = document.getElementById(`bullet-${bulletCount}`);
		const y = this.position.y;
		const pos = { x: 100, y: y };
		const projectilePosition = new ProjectilePosition(pos);

		// Provided func for projectile movement
		const loop = new ProjectileLoop(
			function (id, position) {
				const handleHitEnemy = hitEnemy(
					position,
					enemyController.positions
				);

				if (handleHitEnemy === 1) {
					console.log(`------------------------------------------`);
					clearInterval(this.timer);
					bulletCount -= 1;
					this.timer = 0;
					position.x = 0;
					id.parentNode.removeChild(id);
				} else {
					position.x -= 1;
					id.style.right = `${position.x}%`;
				}
			},
			id,
			projectilePosition.pos
		);
		loop.startLoop();
	}
}

export default class Gun {
	constructor(pos) {
		this.pos = pos;
	}
	shoot() {
		const grid = document.getElementById("grid");
		bulletCount++;
		const projectile = new Projectile(this.pos, 10);
		projectile.getStats();
		projectile.render(bulletCount);
		projectile.start(bulletCount);
	}
}
