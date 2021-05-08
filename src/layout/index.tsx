import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Loader from 'components/Loader';

import Default from './Default';

const Home = React.lazy(() => import('features/Home'));

const Layout: React.FC = () => (
	<Suspense fallback={<Loader loading={true} />}>
		<Router>
			<Default>
				<Switch>
					<Route exact path="/" component={Home} />
					<Redirect to="/" />
				</Switch>
			</Default>
		</Router>
	</Suspense>
);

export default React.memo(Layout);
