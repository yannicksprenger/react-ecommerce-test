import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    paper: {
    	marginTop: theme.spacing(8),
    	display: 'flex',
    	flexDirection: 'column',
    	alignItems: 'center',
  	},
  	form: {
    	width: '100%', // Fix IE 11 issue.
    	marginTop: theme.spacing(1),
  	},
  	submit: {
    	margin: theme.spacing(1, 0),
  	},
}));

export default function Login() {
    const classes = useStyles();

    return (
		<Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Welcome!
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="username"
						name="username"
						label="Username"
						autoComplete="username"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="password"
						name="password"
						label="Password"
						autoComplete="current-password"
						type="password"
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Login
					</Button>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Register
					</Button>
					<Grid>
						<Link href="#">
							forgot your password?
						</Link>
					</Grid>
				</form>
			</div>
		</Container>
    )
}