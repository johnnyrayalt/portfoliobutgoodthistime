import React from 'react';
import './App.scss';
import SideNav from './components/SideNav';
import SubNavLink from './components/SubNavLink';
import Views from './views/Views';
import { AWSService } from './services/AWS/AwsService';
import creds from './config.json';

const getImages = new AWSService(creds).getImages();
console.log(getImages);

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
			<div id="body-content-wrapper">
				<Views />
			</div>
		</div>
	);
};

export default App;
