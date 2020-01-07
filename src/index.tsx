import { LinearCopy, Node, Shaders } from 'gl-react';
import { Surface } from 'gl-react-dom';
import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore // no d.ts file
import JSON2D from 'react-json2d';
// @ts-ignore // imported via custom parcel-plugin
import FragShader from './fragShader.frag';
import timeLoop from './timeLoop';

const shaders = Shaders.create({
	animated: {
		frag: FragShader,
	},
});

interface IAnimated {
	t: number;
	time: number;
}
class Animated extends Component<IAnimated> {
	render() {
		const { children: t, time } = this.props;
		return (
			<Node
				shader={shaders.animated}
				uniforms={{
					t,
					time,
					freq: 20 - 14 * Math.sin(time / 10000),
					amp: 0.5 * (1 - Math.cos(time / 7500)),
					colorSeparation: 0.5,
					moving: 0.5,
				}}
			/>
		);
	}
}

const AnimatedLoop = timeLoop(Animated);

const size = { width: window.innerWidth, height: window.innerHeight };
const font = "bold 36px 'Courier New', Courier, monospace";
const lineHeight = 40;
const padding = 10;

interface IText {
	text: string;
}

class Text extends PureComponent<IText> {
	render() {
		const { text } = this.props;
		return (
			<LinearCopy>
				<JSON2D {...size}>
					{{
						background: '#FFF',
						size: [window.innerWidth, window.innerHeight],
						draws: [
							{
								textBaseline: 'top',
								fillStyle: '#000',
								font,
							},
							['fillText', text, padding, padding, lineHeight],
						],
					}}
				</JSON2D>
			</LinearCopy>
		);
	}
}

export default class Main extends Component<IText> {
	render() {
		const { text } = this.props;
		return (
			<Surface {...size}>
				<AnimatedLoop>
					<Text text={text} />
				</AnimatedLoop>
			</Surface>
		);
	}
}

ReactDOM.render(<Main text={'Under Construction'} />, document.getElementById('root'));
