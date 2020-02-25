import React, { useState } from "react";
import { login } from "../state/actions/index";
import { GoogleLogin } from "react-google-login";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
import TextFieldAtom from "../../atoms/TextField/TextFieldAtom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import PermIdentityTwoToneIcon from "@material-ui/icons/PermIdentityTwoTone";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { google } from "../../../config/constants";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#12AE96"
  },
  form: {
    // width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    backgroundColor: "#12AE96",
    textAlign: "center",
    width: "100%",
    margin: theme.spacing(3, 0, 2)
  },
  mainContainer: {
    width: 300
  }
}));

export function Login({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const responseGoogle = response => {
    login(response);
  };
  const loginSubmit = e => {
    e.preventDefault();
    let data = { email: email, password: password };
    login(data);
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={10}>
        <div component="main" className={classes.mainContainer}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <PermIdentityTwoToneIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextFieldAtom
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={e => {
                  setEmail(e.target.value);
                }}
                setEmail={setEmail}
              />
              <TextFieldAtom
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => {
                  setPassword(e.target.value);
                }}
                setPassword={setPassword}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                id="xyz"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={e => loginSubmit(e)}
              >
                Sign In
              </Button>
              <GoogleLogin
                className={classes.submit}
                clientId={google.loginClientId}
                buttonText="Continue with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />

              {/* <Grid container>
                <Grid item sm={12}>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}
            </form>
          </div>
          <Box mt={8}></Box>
        </div>
      </Grid>
    </Grid>
  );
}

export default connect(null, { login })(Login);
