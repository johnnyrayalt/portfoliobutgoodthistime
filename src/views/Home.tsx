import React, { RefObject } from 'react';
import * as THREE from 'three';
import './Home.scss';
// const createGeometry = require('three-bmfont-text');
// const loadFont = require('load-bmfont');

class Home extends React.Component<{}, {}> {
	private canvas: RefObject<any>;

	constructor(props: any) {
		super(props);
		this.canvas = React.createRef();
	}

	componentDidMount() {
		const scene = new THREE.Scene();
		scene.background = new THREE.Color(0xffffff);
		const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
		const canvas = this.canvas.current;
		const renderer = new THREE.WebGLRenderer({ canvas: canvas });

		renderer.setSize(window.innerWidth - 200, window.innerHeight);

		const fontJSON = require('../assets/fonts/lato_black.typeface.json');
		console.log(fontJSON);
		const font = new THREE.Font(fontJSON);
		const fontGeometry = new THREE.TextGeometry('WELCOME', {
			font: font,
			size: 1,
			height: 1,
		});

		const fontMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

		const fontMesh = new THREE.Mesh(fontGeometry, fontMaterial);

		scene.add(fontMesh);

		camera.position.z = 8;
		const animate = function() {
			requestAnimationFrame(animate);
			// cube.rotation.x += 0.01;
			// cube.rotation.y += 0.01;
			renderer.render(scene, camera);
		};
		animate();
	}

	render() {
		return (
			<>
				<div style={{ width: '100%' }}>
					<canvas ref={this.canvas} style={{ width: '100%', height: '100%' }} />;
				</div>
			</>
		);
	}
}

export default Home;
