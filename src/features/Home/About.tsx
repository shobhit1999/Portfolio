import React, { useEffect } from 'react';

import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import AOS from 'aos';
import ProfilePhoto from 'assets/psp.jpg';
import clsx from 'clsx';
import { ABOUT, SKILLS } from 'CONSTANTS';

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
	skillContainer: {
		marginTop: theme.spacing(3),
		border: `1px solid ${theme.palette.primary.main}`,
		padding: theme.spacing(2),
		background: theme.palette.secondary.main,
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	profilePhoto: {
		borderRadius: '100%',
		height: '360px',
		width: '330px',
	},
}));

const About: React.FC = () => {
	const classes = useStyle();

	useEffect(() => {
		AOS.init({
			duration: 700,
		});
	});
	return (
		<div data-aos="fade-up">
			<Typography color="primary" variant="h6">
				About
			</Typography>
			<Grid container>
				<Box width="50%" mr={12}>
					{ABOUT.map((item, index) => {
						return (
							<Typography className={clsx(classes.slate, classes.mt3)} key={index}>
								{item}
							</Typography>
						);
					})}
					<Paper className={classes.skillContainer} data-aos="flip-up" data-aos-delay="100">
						{SKILLS.map((item) => {
							return <Chip size="medium" label={item} color="primary" variant="outlined" key={item} />;
						})}
					</Paper>
				</Box>
				<img src={ProfilePhoto} className={classes.profilePhoto} data-aos="fade-left" />
			</Grid>
		</div>
	);
};

export default About;
