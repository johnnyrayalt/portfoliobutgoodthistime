import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { IMAGE_ROOTS } from '../assets/constants';
import About from './about';
import Home from './home';
import ProjectPage from './projectPage';
import Works from './works';

const Views = (): JSX.Element => {

	return (
		<Switch>
			<Route exact path='/' component={() => <Home />} />

			<Route
				exact
				path='/works/art'
				component={() => <Works worksRootIndex={IMAGE_ROOTS.art} />}
			/>

			<Route
				exact
				path='/works/professional'
				component={() => <Works worksRootIndex={IMAGE_ROOTS.professional} />}
			/>

			<Route
				exact
				path='/works/art/:id'
				component={() => <ProjectPage root={IMAGE_ROOTS.art} />}
			/>

			<Route
				exact
				path='/works/professional/:id'
				component={() => <ProjectPage root={IMAGE_ROOTS.professional} />}
			/>

			<Route
				exact
				path='/about'
				component={() => <About />}
			/>

		</Switch>
	);
};

export default Views;
