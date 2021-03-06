import React from 'react';
import { NavLink } from 'react-router-dom';
import { ISideNavState } from '../interfaces/ISideNavState';
import './SideNavStyles.scss';

/**
 * test
 */
class SideNav extends React.Component<{}, ISideNavState> {
	constructor(props: Readonly<{}>) {
		super(props);
		this.state = {
			expanded: false,
		};

		this.handleChangeExpandedState = this.handleChangeExpandedState.bind(this);
	}

	handleChangeExpandedState = () => {
		if (!this.state.expanded) {
			this.setState({ expanded: true });
		} else {
			this.setState({ expanded: false });
		}
	};

	render() {
		return (
			<div id="side-nav-container">
				<div className="name-container">
					<NavLink className="link" to="/">
						Johnny Ray Alt
					</NavLink>
				</div>
				<div className="link-container">
					<nav>
						<ul className="side-nav-ul">
							<li className="side-nav-li">
								<button onClick={this.handleChangeExpandedState} className="link btn">
									Projects
								</button>
								{this.state.expanded && this.props.children}
							</li>
							<li className="side-nav-li">
								<NavLink className="link" to="/about">
									About
								</NavLink>
							</li>
							<li className="side-nav-li">
								<a className="link" href="https://github.com/johnnyrayalt" rel="noopener noreferrer" target="_blank">
									&#x02197; Github
								</a>
							</li>
							<li className="side-nav-li">
								<a className="link" href="mailto:johnnyrayalt@gmail.com">
									&#x02197; Contact
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

export default SideNav;
