import Gun from "./Shoot.js";

const pos = { x: 0, y: 0 };
const gun = new Gun(pos);

class PlayerID {
	constructor(id) {
		this.id = id;
	}
}

class Movement extends PlayerID {
	constructor(direction) {
		super(document.getElementById("player"));
		this.direction = direction;
		this.borders = {
			north: 0,
			south: 450,
		};
	}

	move(direction) {
		// console.log(direction);
		switch (direction) {
			case "KeyW":
				pos.y === this.borders.north ? pos.y : (pos.y -= 50);
				break;
			case "KeyS":
				pos.y === this.borders.south ? pos.y : (pos.y += 50);

				break;
			case "ArrowUp":
				pos.y === this.borders.north ? pos.y : (pos.y -= 50);
				break;
			case "ArrowDown":
				pos.y === this.borders.south ? pos.y : (pos.y += 50);

				break;
			case "Space":
				gun.shoot();

				break;
			default:
				break;
		}
		return (this.id.style.top = `${pos.y}px`);
	}
}

export default class PlayerMovement {
	initMovement() {
		document.addEventListener("keydown", this.movePlayer);
	}

	movePlayer(e) {
		const movement = new Movement(e.code);
		movement.move(movement.direction);
	}
}
