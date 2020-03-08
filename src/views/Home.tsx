import React, { RefObject, Suspense } from 'react';
import './Home.scss';
import { Canvas } from 'react-three-fiber';
import WebGlText from '../components/WebGLFont/WebGLText';

// const createGeometry = require('three-bmfont-text');
// const loadFont = require('load-bmfont');

class Home extends React.Component<{}, {}> {
	private canvas: RefObject<any>;

	constructor(props: any) {
		super(props);
		this.canvas = React.createRef();
	}

	// componentDidMount() {
	// 	const font = new WebGLFont({ canvas: this.canvas }, { word: 'WELCOME', position: [-3, 0, 10], zoom: 100 });
	// 	return font;
	// }

	render() {
		return (
			<>
				<Canvas camera={{ position: [0, 0, 35] }} style={{ width: '100%' }}>
					<ambientLight intensity={2} />
					<pointLight position={[40, 40, 40]} />
					<Suspense fallback={null}>
						<WebGlText children="WELCOME" position={[0, 4.2, 0]} hAlign="left" />
					</Suspense>
				</Canvas>
			</>
		);
	}
}

export default Home;
