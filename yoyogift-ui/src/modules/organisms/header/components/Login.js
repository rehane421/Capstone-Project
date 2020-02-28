import React from "react";
import { login } from "../state/actions/index";
import { GoogleLogin } from "react-google-login";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import PermIdentityTwoToneIcon from "@material-ui/icons/PermIdentityTwoTone";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { google } from "../../../../config/constants";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

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
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const classes = useStyles();

  const responseGoogle = response => {
    login(response);
  };
  const loginSubmit = values => {
    let data = { email: values.email, password: values.password };
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
            <Formik
              initialValues={{
                email: "",
                password: ""
              }}
              onSubmit={values => loginSubmit(values)}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email("Invalid email")
                  .required("Required"),
                password: Yup.string().required("required")
              })}
            >
              {props => {
                const {
                  values,
                  touched,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit
                } = props;
                return (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      error={errors.email && touched.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.email && touched.email && errors.email}
                      value={values.email}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      error={errors.password && touched.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.password && touched.password && errors.password
                      }
                      value={values.password}
                    />
                    <Button
                      id="xyz"
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
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
                  </form>
                );
              }}
            </Formik>
          </div>
          <Box mt={8}></Box>
        </div>
      </Grid>
    </Grid>
  );
}

export default connect(null, { login })(Login);
