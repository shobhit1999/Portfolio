import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';

import BharatPe from 'assets/bharatpe.png';
import { BHARATPE } from 'CONSTANTS';

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
	tab: {
		borderLeft: `1px solid ${theme.palette.primary.main}`,
		marginRight: theme.spacing(2),
		padding: theme.spacing(1, 2),
		height: 'fit-content',
		width: 'fit-content',
	},
}));

const Experience: React.FC = () => {
	const classes = useStyle();

	return (
		<div data-aos="fade-up">
			<Typography color="primary" variant="h6">
				Work Experience
			</Typography>
			<Grid className={classes.mt3} container wrap="nowrap">
				<Grid container alignItems="center" wrap="nowrap" className={classes.tab} data-aos="fade-right">
					<img src={BharatPe} width="16" height="16" />
					&nbsp;<Typography color="primary">BharatPe</Typography>
				</Grid>
				<Grid container direction="column" data-aos="fade-left">
					<Typography className={classes.white} style={{ marginTop: '8px' }}>
						SDE-I (Full Stack Developer)
					</Typography>
					<Typography className={classes.slate} style={{ marginTop: '8px' }}>
						Jan 2020 - Present
					</Typography>
					{BHARATPE.map((item, index) => {
						return (
							<Grid container key={index} className={classes.mt3}>
								<ArrowRightSharpIcon color="primary" fontSize="small" />
								<Typography className={classes.slate} style={{ marginLeft: '8px', width: '50%' }}>
									{item}
								</Typography>
							</Grid>
						);
					})}
				</Grid>
			</Grid>
		</div>
	);
};

export default Experience;
