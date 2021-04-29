import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './about';
import Home from './home';
import ProjectPage from './projectPage';
import Works from './works';

const Views = (): JSX.Element => {

	return (
		<div className='test'>
			<Switch>
				<Route exact path='/' component={() => <Home />} />

				<Route
					exact
					path='/works/art'
					component={() => <Works worksRootIndex={'art'} />}
				/>

				<Route
					exact
					path='/works/professional'
					component={() => <Works worksRootIndex={'professional'} />}
				/>

				<Route
					exact
					path='/works/art/:id'
					component={() => <ProjectPage root={'art'} />}
				/>

				<Route
					exact
					path='/works/professional/:id'
					component={() => <ProjectPage root={'professional'} />}
				/>

				<Route
					exact
					path='/about'
					component={() => <About />}
				/>

			</Switch>
		</div>
	);
};

export default Views;
