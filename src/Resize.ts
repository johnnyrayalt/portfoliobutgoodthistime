export class Resize {
	public width: number;
	public height: number;

	constructor() {
		this.update();
	}

	// public animate = (): void => {
	// 	this.update();
	// };

	public update = (): void => {
		const convertToCSSPixels: number = window.devicePixelRatio;
		let displayWidth: number = Math.floor(window.innerWidth * convertToCSSPixels);
		let displayHeight: number = Math.floor(window.innerHeight * convertToCSSPixels);

		if (window.innerWidth !== displayWidth || window.innerHeight !== displayHeight) {
			this.width = displayWidth;
			this.height = displayHeight;
			requestAnimationFrame(this.update.bind(this));
		}
	};
}
