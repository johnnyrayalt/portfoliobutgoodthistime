import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { IViewsProps } from '../interfaces/IViewsProps';
import About from './About';
import Error404 from './Error404';
import Home from './Home';
import Projects from './Projects';

const Views = (props: IViewsProps) => {
	return (
		<>
			<Switch>
				<Route exact path="/" activeClassName="link" component={Home}></Route>
				<Route
					exact
					activeClassName="active"
					path="/projects/web"
					component={() => <Projects images={props.images} type="web" />}
				></Route>
				<Route
					exact
					activeClassName="active"
					path="/projects/art"
					component={() => <Projects images={props.images} type="art" />}
				></Route>
				<Route activeClassName="active" path="/about" component={About} />
				<Route component={Error404} />
			</Switch>
		</>
	);
};

export default Views;
