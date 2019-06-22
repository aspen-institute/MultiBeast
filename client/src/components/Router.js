/* eslint-disable no-unused-vars */
import React from 'react'; //If you're using JSX, you need to import React.
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './App';
import ListView from './ListView';
import SessionPage from './SessionPage';
import NotFound from './NotFound';
import Login from './Login';
import Admin from './Admin';
import SplashPage from './SplashPage';
import Worksheet from './Worksheet'

class Router extends React.Component {
	render() {
		return (
			// THE ORDER OF THE ROUTES ARE IMPORTANT
			<BrowserRouter basename="">
				<Switch>
					<Route exact path="/" component={SplashPage} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/admin" component={Admin} />
					<Route exact path="/view/:type/:param" component={ListView} />
					<Route path="/page/worksheet" component={Worksheet} />
					<Route path="/view/:type" component={Home} />
					<Route exact path="/session/:sessionID" component={SessionPage} />
					<Route component={NotFound} /> {/* Catch all for 404s. No path */}
				</Switch>
			</BrowserRouter>
		);
	}
}
export default Router;
