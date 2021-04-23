import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import ProjectPage from './projectPage';
import Works from './works';
import About from './about';

const Views = (props: { images: any }): JSX.Element => {
	const { images } = props;

	return (
		<>
			<Switch>
				<Route exact path='/' component={() => <Home expandedDefaultState={false} />} />

				<Route
					exact
					path='/works/art'
					component={() => <Works expandedDefaultState={false} worksRootIndex={'art'} />}
				/>

				<Route
					exact
					path='/works/professional'
					component={() => <Works expandedDefaultState={false} worksRootIndex={'professional'} />}
				/>

				<Route
					exact
					path='/works/art/:id'
					component={() => <ProjectPage expandedDefaultState={false} root={'art'} allImages={images} />}
				/>

				<Route
					exact
					path='/works/professional/:id'
					component={() => <ProjectPage expandedDefaultState={false} root={'professional'} allImages={images} />}
				/>

				<Route
					exact
					path='/about'
					component={() => <About expandedDefaultState={false} />}
				/>

			</Switch>
		</>
	);
};

export default Views;
