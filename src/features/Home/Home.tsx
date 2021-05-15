import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import clsx from 'clsx';

const useStyle = makeStyles((theme) => ({
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

const Home: React.FC = () => {
	const classes = useStyle();
	return (
		<>
			<Typography color="primary">Hi, my name is</Typography>
			<Typography className={clsx(classes.white, classes.mt3)} variant="h2">
				<b>Shobhit Mangla.</b>
			</Typography>
			<Typography className={clsx(classes.slate, classes.mt3)} variant="h3">
				<b>I build things for the web.</b>
			</Typography>
			<Typography className={clsx(classes.slate, classes.mt3)}>{`I'm a Full Stack Web Developer.`}</Typography>
			<Button
				variant="outlined"
				color="primary"
				className={classes.touchBtn}
				href="mailto:manglashobhit@gmail.com">
				Get in Touch
			</Button>
		</>
	);
};

export default Home;
