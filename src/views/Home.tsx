import React, { RefObject } from 'react';
import * as THREE from 'three';
import './Home.scss';

class Home extends React.Component<{}, {}> {
	private canvas: RefObject<any>;

	constructor(props: any) {
		super(props);
		this.canvas = React.createRef();
	}

	componentDidMount() {
		const scene = new THREE.Scene();
		scene.background = new THREE.Color(0xffffff);
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		const canvas = this.canvas.current;
		const renderer = new THREE.WebGLRenderer({ canvas: canvas });

		renderer.setSize(window.innerWidth - 200, window.innerHeight);

		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		const cube = new THREE.Mesh(geometry, material);
		scene.add(cube);
		camera.position.z = 5;
		const animate = function() {
			requestAnimationFrame(animate);
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
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
