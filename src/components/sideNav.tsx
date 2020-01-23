import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideNavStyles.scss';

export interface ISideNav {
	expanded: boolean;
}

class SideNav extends React.Component<{}, ISideNav> {
	constructor(props: any) {
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
						<ul>
							<li>
								<NavLink id="projectsLink" to="/projects" onClick={this.handleChangeExpandedState} className="link">
									Projects
								</NavLink>
								{this.state.expanded && this.props.children}
							</li>
							<li>
								<NavLink className="link" to="/about">
									About
								</NavLink>
							</li>
							<li>
								<a className="link" href="https://github.com/johnnyrayalt" rel="noopener noreferrer" target="_blank">
									Github
								</a>
							</li>
							<li>
								<a className="link" href="mailto:johnnyrayalt@gmail.com">
									Contact
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
