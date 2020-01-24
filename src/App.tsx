import React from 'react';
import './App.scss';
import SideNav from './components/SideNav';
import SubNavLink from './components/SubNavLink';
import Routes from './Routes';

const App: React.FC = () => {
	return (
		<div className="App">
			<div id="side-nav-wrapper">
				<SideNav>
					<ul>
						<li>
							<SubNavLink link={{ parent: 'projects', child: 'web' }} classNames={['link', 'sub-nav-link']} />
						</li>
						<li>
							<SubNavLink link={{ parent: 'projects', child: 'art' }} classNames={['link', 'sub-nav-link']} />
						</li>
					</ul>
				</SideNav>
			</div>
			<div className="body-content-wrapper">
				<Routes />
			</div>
		</div>
	);
};

export default App;
