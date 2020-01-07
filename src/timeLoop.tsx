import hoistNonReactStatics from 'hoist-non-react-statics';
import React, { PureComponent } from 'react';

export interface IState {
	time: number;
	tick: number;
}

export default (C: any, { refreshRate = 60 }: { refreshRate?: number } = {}): any => {
	class TL extends PureComponent {
		static displayName = `timeLoop(${C.displayName || C.name || ''})`;
		state: IState = {
			time: 0,
			tick: 0,
		};
		_r: any;
		componentDidMount() {
			let startTime: number, lastTime: number;
			let interval = 1000 / refreshRate;
			lastTime = -interval;
			const loop = (t: number) => {
				this._r = requestAnimationFrame(loop.bind(this));
				if (!startTime) startTime = t;
				if (t - lastTime > interval) {
					lastTime = t;
					this.setState({
						time: t - startTime,
						tick: this.state.tick + 1,
					});
				}
			};
			this._r = requestAnimationFrame(loop.bind(this));
		}
		componentWillUnmount() {
			cancelAnimationFrame(this._r);
		}
		render() {
			return <C {...this.props} {...this.state} />;
		}
	}

	hoistNonReactStatics(TL, C);

	return TL;
};
