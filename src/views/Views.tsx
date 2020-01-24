import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Error404 from './Error404';
import Home from './Home';
import WebProjects from './Projects';

const Views = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" activeClassName="link" component={Home}></Route>
				<Route exact activeClassName="active" path="/projects/web" component={() => <WebProjects type="web" />}></Route>
				<Route exact activeClassName="active" path="/projects/art" component={() => <WebProjects type="art" />}></Route>
				<Route activeClassName="active" path="/about" component={About} />
				<Route component={Error404} />
			</Switch>
		</>
	);
};

export default Views;
