import React from 'react';
import * as THREE from 'three';
const fontAtlas = require('../../assets/fonts/lato_black.png');
const fontJSON = require('../../assets/fonts/lato_black.typeface.json');

interface IWebGLFontOpts {
	word: string;
	position: number[];
	zoom: number;
}

interface IWebGLFontProps {
	canvas: React.RefObject<any>;
}

export default class WebGLFont extends React.Component<IWebGLFontProps, IWebGLFontOpts> {
	private canvas: HTMLCanvasElement;

	private word: string;
	private position: number[];
	private zoom: number;

	private scene: THREE.Scene;
	private camera: THREE.PerspectiveCamera;
	private renderer: THREE.WebGLRenderer;

	private loader!: THREE.TextureLoader;
	private geometry!: THREE.TextGeometry;
	private material!: THREE.MeshBasicMaterial;
	private mesh!: THREE.Mesh;

	constructor(props: IWebGLFontProps, opts: IWebGLFontOpts) {
		super(props);
		this.canvas = props.canvas.current;

		// Set Options
		this.word = opts.word;
		this.position = opts.position;
		this.zoom = opts.zoom;

		// Set Scene
		this.scene = new THREE.Scene();

		// Set Font

		// Set Camera
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
		this.camera.position.z = 15;

		// Set Renderer
		this.renderer = new THREE.WebGLRenderer({
			canvas: this.canvas,
			antialias: true,
		});
		this.renderer.setClearColor(0xffffff);
		this.renderer.setSize(window.innerWidth / 1.5, window.innerHeight - 10);
		this.renderer.setPixelRatio(window.devicePixelRatio);

		this.loadFont();
	}

	private loadFont = (): void => {
		const font = new THREE.Font(fontJSON);

		this.geometry = new THREE.TextGeometry(this.word, {
			font: font,
			size: 1,
			height: 1,
		});

		this.loader = new THREE.TextureLoader();
		this.loader.load(fontAtlas, texture => {
			setTimeout(() => {
				this.init(this.geometry, texture);
				this.animate();
			}, 1500);
		});
	};

	private init = (geometry: THREE.TextGeometry, texture: THREE.Texture): void => {
		this.createMesh(geometry, texture);
		this.renderScene();
	};

	private animate = (): void => {
		requestAnimationFrame(this.animate.bind(this));
		this.renderScene();
	};

	private createMesh = (geometry: THREE.TextGeometry, texture: THREE.Texture): void => {
		this.material = new THREE.MeshPhongMaterial({ map: texture, flatShading: true, color: 0xffffff });

		this.mesh = new THREE.Mesh(geometry, this.material);
		this.mesh.position.set(this.position[0], this.position[1], this.position[2]);

		this.scene.add(this.mesh);
	};

	private renderScene = (): void => {
		this.renderer.render(this.scene, this.camera);
	};
}
