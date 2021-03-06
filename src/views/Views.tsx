import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IndividualProject from '../components/IndividualProject';
import { IViewsProps } from '../interfaces/IViewsProps';
import About from './About';
import Error404 from './Error404';
import Home from './Home';
import Projects from './Projects';

const Views = (props: IViewsProps): JSX.Element => {
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

				<Route
					exact
					path={`/projects/art/:key`}
					component={() => <IndividualProject imagesList={props.images} type="art" />}
				/>

				<Route
					exact
					path={`/projects/web/:key`}
					component={() => <IndividualProject imagesList={props.images} type="web" />}
				/>

				<Route activeClassName="active" path="/about" component={About} />

				<Route component={Error404} />
			</Switch>
		</>
	);
};

export default Views;
