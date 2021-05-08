import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyle = makeStyles((theme) => ({
	h100: {
		height: '100%',
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
}));

const Home: React.FC = () => {
	const classes = useStyle();
	return (
		<>
			<Grid container justify="center" direction="column" className={classes.h100}>
				<Typography color="primary">Hi, my name is</Typography>
				<Typography className={clsx(classes.white, classes.mt3)} variant="h2">
					<b>Shobhit Mangla.</b>
				</Typography>
				<Typography className={clsx(classes.slate, classes.mt3)} variant="h3">
					<b>I build things for the web.</b>
				</Typography>
			</Grid>
		</>
	);
};

export default Home;
