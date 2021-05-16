import p5Types, {Vector} from 'p5';

export class Ray {
	pos: any;
	dir: any;

	constructor(pos: any, angle: any) {
		this.pos = pos;
		this.dir = Vector.fromAngle(angle)
	}

	setAngle = (angle: any) => {
		this.dir = Vector.fromAngle(angle);
	}

	lookAt = (x: number, y: number) => {
		this.dir.x = x - this.pos.x;
		this.dir.y = y - this.pos.y;
		this.dir.normalize();
	}

	show = (p: p5Types) => {
		p.stroke(255);
		p.push();
		p.translate(this.pos.x, this.pos.y);
		p.line(0, 0, this.dir.x * 10, this.dir.y * 10);
	}

	cast = (p: p5Types, wall: any) => {
		const x1 = wall.a.x;
		const y1 = wall.a.y;
		const x2 = wall.b.x;
		const y2 = wall.b.y;

		const x3 = this.pos.x;
		const y3 = this.pos.y;
		const x4 = this.pos.x + this.dir.x;
		const y4 = this.pos.y + this.dir.y;

		const den1 = (x1 - x2) * (y3 - y4);
		const den2 = (y1 - y2) * (x3 - x4);
		const den = den1 - den2;
		if (den === 0) return null;

		const t1 = (x1 - x3) * (y3 - y4)
		const t2 = (y1 - y3) * (x3 - x4)
		const t = (t1 - t2) / den

		const u1 = (x1 - x2) * (y1 - y3)
		const u2 = (y1 - y2) * (x1 - x3)
		const u = - (u1 - u2) / den

		if (t > 0 && t < 1 && u > 0) {
			const pt = p.createVector();
			pt.x = x1 + t * (x2 - x1);
			pt.y = y1 + t * (y2 - y1);
			return pt;
		} else {
			return null;
		}
	}

}