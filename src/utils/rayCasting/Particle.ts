import p5Types, { Vector } from 'p5';
import { Ray } from './Ray';

export class Particle {
	pos: Vector;
	rays: any[];

	constructor(p: p5Types) {
		this.pos = p.createVector(50, 50);
		this.rays = [];
		const rays = 20;
		for (let a = 0; a < 359.9; a += 360 / rays) {
			this.rays.push(new Ray(this.pos, p.radians(a)))
		}
	}

	update = (x: number, y: number) => {
		this.pos.set(x, y);
	};

	look = (p: p5Types, walls: any[]) => {
		for (let ray of this.rays) {
			let closest = null;
			let record = Infinity;

			for (let wall of walls) {
				let pt = ray.cast(p, wall);
				if (pt) {
					const d = Vector.dist(this.pos, pt);
					if (d < record) {
						closest = pt;
						record = d;
					}
				}
			}

			if (closest) {
				p.stroke(255, 25);
				p.strokeWeight(1);
				p.line(this.pos.x, this.pos.y, closest.x, closest.y);
			}
		}
	};

	show = (p: p5Types) => {
		p.fill(255);
		p.ellipse(this.pos.x, this.pos.y, 4);
		// for (let ray of this.rays) {
		// 	ray.show();
		// }
	};
}