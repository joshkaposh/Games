class RGB {
	constructor(r, g, b) {
		this.rgb = { r: r, g: g, b: b };
	}
}

class Rainbow extends RGB {
	constructor() {
		super(255, 0, 0);
		this.nextColor = "";
		this.id = document.querySelector("#rainbow");
		this.timer = "";
	}

	transition(rgb, val, oper) {
		if (oper === "plus") {
			switch (rgb) {
				case "r":
					this.rgb.r += val;
					this.id.style.backgroundColor = `rgb(${this.rgb.r},${this.rgb.g},${this.rgb.b})`;
					break;
				case "g":
					this.rgb.g += val;
					this.id.style.backgroundColor = `rgb(${this.rgb.r},${this.rgb.g},${this.rgb.b})`;
					break;
				case "b":
					this.rgb.b += val;
					this.id.style.backgroundColor = `rgb(${this.rgb.r},${this.rgb.g},${this.rgb.b})`;
					break;
				default:
					break;
			}
		}
		if (oper === "minus") {
			switch (rgb) {
				case "r":
					this.rgb.r -= val;
					this.id.style.backgroundColor = `rgb(${this.rgb.r},${this.rgb.g},${this.rgb.b})`;
					break;
				case "g":
					this.rgb.g -= val;
					this.id.style.backgroundColor = `rgb(${this.rgb.r},${this.rgb.g},${this.rgb.b})`;
					break;
				case "b":
					this.rgb.b -= val;
					this.id.style.backgroundColor = `rgb(${this.rgb.r},${this.rgb.g},${this.rgb.b})`;
					break;
				default:
					break;
			}
		}
	}

	setNextColor(newColor) {
		this.nextColor = newColor;
	}

	init() {
		this.id.addEventListener(
			"click",
			this.startLoop.bind(this, this.rgb, this.nextColor)
		);
	}

	startLoop() {
		// TODO - make it so clicking starts/stops loop

		// this.id.removeEventListener('click', this.startLoop)
		// this.id.addEventListener('click', this.endLoop)
		// document.getElementById('start').innerText = 'Click to End'

		this.timer = setInterval(() => {
			if (this.rgb.r === 255 && this.rgb.g === 0 && this.rgb.b === 0)
				this.nextColor = "orange";

			switch (this.nextColor) {
				// Switch statement for switching colors/updating rgb values
				case "orange":
					if (
						this.rgb.r === 255 &&
						this.rgb.g === 127 &&
						this.rgb.b === 0
					) {
						this.nextColor = "yellow";
					} else {
						this.rgb.g++;
						this.id.style.backgroundColor = `rgb(${this.rgb.r},${this.rgb.g},${this.rgb.b})`;
						console.log(this.rgb);
						console.log(this.nextColor);
					}
					break;
				case "yellow":
					if (
						this.rgb.r === 255 &&
						this.rgb.g === 255 &&
						this.rgb.b === 0
					) {
						this.nextColor = "green";
					} else {
						this.rgb.g++;
						this.id.style.backgroundColor = `rgb(${this.rgb.r},${this.rgb.g},${this.rgb.b})`;
						console.log(this.rgb);
						console.log(this.nextColor);
					}
					break;
				case "green":
					if (
						this.rgb.r === 0 &&
						this.rgb.g === 255 &&
						this.rgb.b === 0
					) {
						this.nextColor = "blue";
					} else {
						this.rgb.r--;
						this.id.style.backgroundColor = `rgb(${this.rgb.r},${this.rgb.g},${this.rgb.b})`;
						console.log(this.rgb);
						console.log(this.nextColor);
					}
					break;
				case "blue":
					if (
						this.rgb.r === 0 &&
						this.rgb.g === 0 &&
						this.rgb.b === 255
					) {
						this.nextColor = "indigo";
					} else {
						if (this.rgb.g === 255 && this.rgb.b !== 255) {
							this.rgb.b++;
						} else {
							this.rgb.g--;
						}
						this.id.style.backgroundColor = `rgb(${this.rgb.r},${this.rgb.g},${this.rgb.b})`;
						console.log(this.rgb);
						console.log(this.nextColor);
					}
					break;
				case "indigo":
					if (
						this.rgb.r === 75 &&
						this.rgb.g === 0 &&
						this.rgb.b === 130
					) {
						this.nextColor = "violet";
					} else {
						if (this.rgb.r !== 75) {
							this.rgb.r++;
						} else {
							this.rgb.b--;
						}
						this.id.style.backgroundColor = `rgb(${this.rgb.r},${this.rgb.g},${this.rgb.b})`;
						console.log(this.rgb);
						console.log(this.nextColor);
					}
					break;
				case "violet":
					if (
						this.rgb.r === 148 &&
						this.rgb.g === 0 &&
						this.rgb.b === 211
					) {
						this.nextColor = "red";
					} else {
						if (this.rgb.r !== 148) {
							this.rgb.r++;
						} else {
							this.rgb.b++;
						}
						this.id.style.backgroundColor = `rgb(${this.rgb.r},${this.rgb.g},${this.rgb.b})`;
						console.log(this.rgb);
						console.log(this.nextColor);
					}
					break;
				case "red":
					if (
						this.rgb.r === 255 &&
						this.rgb.g === 0 &&
						this.rgb.b === 0
					) {
						this.nextColor = "orange";
					} else {
						if (this.rgb.b !== 0) {
							this.rgb.b--;
						} else {
							this.rgb.r++;
						}

						this.id.style.backgroundColor = `rgb(${this.rgb.r},${this.rgb.g},${this.rgb.b})`;
						console.log(this.rgb);
						console.log(this.nextColor);
					}
					break;
				default:
					break;
			}
		}, 5);
	}

	endLoop() {
		this.timer = "";
		this.id.removeEventListener("click", this.endLoop);
		this.id.addEventListener(
			"click",
			this.startLoop.bind(this, this.rgb, this.nextColor)
		);
		document.getElementById("start").innerText = "Click to Start";
	}
}

const rainbow = new Rainbow();
rainbow.init();
