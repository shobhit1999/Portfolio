import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import About from './About';
import Experience from './Experience';
import Main from './Home';

const useStyle = makeStyles((theme) => ({
	h100: {
		height: 'calc(100vh - 80px)',
		transition:
			'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
		transitionDelay: '500',
	},
	white: {
		color: 'white',
	},
	mt3: {
		marginTop: theme.spacing(3),
	},
	slate: {
		color: '#8892b0',
	},
	touchBtn: {
		marginTop: theme.spacing(3),
		width: 'fit-content',
	},
}));

const SECTIONS = [
	{ id: 'main', container: <Main /> },
	{ id: 'about', container: <About /> },
	{ id: 'experience', container: <Experience /> },
];

const Home: React.FC = () => {
	const classes = useStyle();
	return (
		<>
			{SECTIONS.map((item) => {
				const { id, container } = item;
				return (
					<Grid container justify="center" direction="column" className={classes.h100} key={id} id={id}>
						{container}
					</Grid>
				);
			})}
		</>
	);
};

export default Home;
