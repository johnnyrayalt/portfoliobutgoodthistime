import React from 'react';
import './App.scss';
import SideNav from './components/SideNav';
import SubNavLink from './components/SubNavLink';
import creds from './config.json';
import { AWSService } from './services/AWS/AwsService';
import Views from './views/Views';

const awsService = new AWSService(creds);
const App = () => {
	const images = awsService.getImageUrlMaps();

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
				<Views images={images} />
			</div>
		</div>
	);
};

export default App;
