import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import WebProjects from './views/WebProjects';
import About from './views/About';
import Error404 from './views/Error404';

const Routes = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" activeClassName="link" component={Home}></Route>
				<Route exact activeClassName="active" path="/projects" component={Home}></Route>
				<Route exact activeClassName="active" path="/projects/web" component={WebProjects}></Route>
				<Route exact activeClassName="active" path="/projects/art" component={WebProjects}></Route>
				<Route activeClassName="active" path="/about" component={About} />
				<Route component={Error404} />
			</Switch>
		</>
	);
};

export default Routes;
