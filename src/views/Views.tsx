import { IViewsProps } from 'interfaces/IViewsProps';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from 'views/About';
import Error404 from 'views/Error404';
import Home from 'views/Home';
import Projects from 'views/Projects';

const Views = (props: IViewsProps) => {
	console.log(props.images);
	return (
		<>
			<Switch>
				<Route exact path="/" activeClassName="link" component={Home}></Route>
				<Route
					exact
					activeClassName="active"
					path="/projects/web"
					component={() => <Projects type="web" imagesList={props.images} />}
				></Route>
				<Route
					exact
					activeClassName="active"
					path="/projects/art"
					component={() => <Projects type="art" imagesList={props.images} />}
				></Route>
				<Route activeClassName="active" path="/about" component={About} />
				<Route component={Error404} />
			</Switch>
		</>
	);
};

export default Views;
