import React, { Suspense, lazy, useEffect } from "react";
import { Route, Switch, withRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Preloader from "../components/Preloader/Preloader";

import HomePage from "../pages/HomePage/HomePage";
const AboutPage = lazy(() => import("../pages/AboutPage/AboutPage"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const RoutePagesComponent = ({ history, location }) => {
	
	const unlisten = history.listen(() => {
		if (!history.location.hash) {
		window.scrollTo(0, 0);
		}
	});

	useEffect(() => {
		unlisten();
	}, []);

	return (
		<Suspense fallback={<Preloader/>}>
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/about" component={AboutPage} />

					<Route component={NotFound} />
				</Switch>
			</AnimatePresence>
		</Suspense>
	);
};

export default withRouter(RoutePagesComponent);
