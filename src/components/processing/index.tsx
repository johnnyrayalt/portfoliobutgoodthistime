import p5 from 'p5';
import p5Types from 'p5';
import React, { FC, useState } from 'react';
import Sketch from 'react-p5';
import { Boundary } from '../../utils/rayCasting/Boundary';
import { Particle } from '../../utils/rayCasting/Particle';
import { useViewport } from '../../utils/useViewportHook';

const Processing: FC = (): JSX.Element => {
	// @ts-ignore

	let { width } = useViewport();
	let sceneWidth = width;
	let sceneHeight = window.innerHeight;
	const walls: any [] = [];
	// @ts-ignore
	const [p, setP5] = useState<p5Types>(new p5());
	let particle = new Particle(p);
	const setup = (p: p5): void => {
		p.createCanvas(sceneWidth, sceneHeight + 40).position(0, -40);

		for (let i = 0; i < 5; i++) {
			const x1 = p.random(sceneWidth);
			const x2 = p.random(sceneWidth);
			const y1 = p.random(sceneHeight);
			const y2 = p.random(sceneHeight);
			walls[i] = new Boundary(p, x1, x2, y1, y2);
		}
		walls.push(new Boundary(p, 0, 0, sceneWidth, 0));
		walls.push(new Boundary(p, sceneWidth, 0, sceneWidth, sceneHeight));
		walls.push(new Boundary(p, sceneWidth, sceneHeight, 0, sceneHeight));
		walls.push(new Boundary(p, 0, sceneHeight, 0, 0));
		particle = new Particle(p);
	};

	const draw = (p: p5Types): void => {
		particle.update(p.mouseX, p.mouseY);
		particle.look(p, walls);
		particle.show(p);

		// for (let wall of walls) {
		// 	wall.show(p)
		// }
	};

	const handleResize = (p: p5Types) => {
		p.resizeCanvas(window.innerWidth, window.innerHeight);
	};

	return (
		<Sketch setup={setup} draw={draw} windowResized={handleResize} />
	);
};

export default Processing;
