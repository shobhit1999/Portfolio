import React, { useEffect, useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import MainIcon from 'assets/Main.svg';
import Box from '@material-ui/core/Box';
import Loader from 'components/Loader';

const useStyle = makeStyles((theme) => ({
	iconContainer: {
		height: '42px',
		width: '42px',
		border: '1px solid #020c1b',
		borderRadius: '100%',
	},
	mainIcon: {
		borderRadius: '100%',
		paddingTop: '5px',
		paddingRight: '2px',
	},
	fitContent: {
		width: 'fit-content',
	},
	toolbarBtn: {
		marginRight: theme.spacing(1),
	},
	bottomLeft: {
		width: theme.spacing(5),
		position: 'fixed',
		bottom: 0,
		left: theme.spacing(5),
		'z-index': 10,
	},
	bottomRight: {
		width: theme.spacing(5),
		position: 'fixed',
		bottom: 0,
		right: theme.spacing(5),
		'z-index': 10,
	},
	verticalLine: {
		marginTop: theme.spacing(2),
		height: theme.spacing(12),
		background: theme.palette.primary.main,
	},
	mail: {
		writingMode: 'vertical-rl',
		color: theme.palette.primary.main,
		textDecoration: 'none',
		marginRight: theme.spacing(1),
	},
}));

const TOOLBAR_BTN = [
	{ title: 'About', href: '#about' },
	{ title: 'Experience', href: '#experience' },
	{ title: 'Work', href: '#work' },
	{ title: 'Contact', href: '#contact' },
];

const Default: React.FC = ({ children }) => {
	const classes = useStyle();
	const [transition, setTransition] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setTransition(true);
		}, 500);
	}, []);

	return (
		<>
			<Loader loading={!transition} />
			<CssBaseline />
			<Slide direction="down" in={transition} mountOnEnter unmountOnExit timeout={200}>
				<AppBar>
					<Toolbar>
						<Grid container justify="space-between" alignItems="center" wrap="nowrap">
							<Grid container alignItems="center" justify="center" className={classes.iconContainer}>
								<img src={MainIcon} height="36" width="36" className={classes.mainIcon} />
							</Grid>
							<Grid container alignItems="center" className={classes.fitContent}>
								{TOOLBAR_BTN.map((item) => {
									return (
										<Button className={classes.toolbarBtn} href={item.href} key={item.title}>
											{item.title}
										</Button>
									);
								})}
								<Button
									variant="contained"
									color="secondary"
									href="/Docs/Shobhit_resume.pdf"
									download="Shobhit's Resume.pdf">
									Resume
								</Button>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			</Slide>
			<Box px={24} pt={10} height="100vh">
				{children}
			</Box>
			<Slide direction="up" in={transition} mountOnEnter unmountOnExit timeout={500}>
				<Grid
					container
					direction="column"
					className={classes.bottomLeft}
					justify="center"
					alignItems="center"
					wrap="nowrap">
					<IconButton href="https://github.com/shobhit1999" target="_blank">
						<GitHubIcon color="primary" />
					</IconButton>
					<IconButton href="https://www.linkedin.com/in/shobhit-mangla-8aa350142/" target="_blank">
						<LinkedInIcon color="primary" />
					</IconButton>
					<Divider orientation="vertical" className={classes.verticalLine} />
				</Grid>
			</Slide>
			<Slide direction="up" in={transition} mountOnEnter unmountOnExit timeout={500}>
				<Grid
					container
					direction="column"
					className={classes.bottomRight}
					justify="center"
					alignItems="center"
					wrap="nowrap">
					<a href="mailto:manglashobhit@gmail.com" className={classes.mail}>
						manglashobhit@gmail.com
					</a>
					<Divider orientation="vertical" className={classes.verticalLine} />
				</Grid>
			</Slide>
		</>
	);
};

export default Default;
