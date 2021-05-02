import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LoaderImg from 'assets/Loader.svg';

interface Props {
	loading: boolean;
}

const useStyle = makeStyles((theme) => ({
	container: {
		height: '100vh',
		left: 0,
		position: 'fixed',
		top: 0,
		width: '100vw',
		'z-index': 10000,
	},
	loader: {
		height: '110px',
		width: '110px',
		borderRadius: '100%',
		border: `1px solid ${theme.palette.primary.main}`,
		paddingTop: theme.spacing(0.5),
		paddingRight: theme.spacing(0.5),
	},
	imgWrapper: {
		borderRadius: '100%',
	},
}));

const Loader: React.FC<Props> = ({ loading }) => {
	const classes = useStyle();
	if (!loading) return <></>;
	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			className={classes.container}
			wrap="nowrap">
			<Grid container alignItems="center" justify="center" className={classes.loader}>
				<img src={LoaderImg} className={classes.imgWrapper} />
			</Grid>
		</Grid>
	);
};

export default Loader;
