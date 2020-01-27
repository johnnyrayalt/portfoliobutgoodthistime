import { IViewsProps } from 'interfaces/IViewsProps';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from 'views/About';
import Error404 from 'views/Error404';
import Home from 'views/Home';
import Projects from 'views/Projects';

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
