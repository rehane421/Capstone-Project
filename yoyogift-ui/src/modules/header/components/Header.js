import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { login, logout, createUser } from "../state/actions";
import { bindActionCreators } from "redux";
import history from "../../common/components/history";
import MySnackBar from "../../common/components/Snackbar";
import Styles from "../../../assets/css/Header.module.css";

const styles = {
  root: {
    flexGrow: 1,
    flexShrink: 1,
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  toolBar: {
    background: "#32567e"
  }
};

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrorSnack: false
    };
  }
  static contextTypes = {
    logger: PropTypes.func
  };
  render() {
    const { showErrorSnack } = this.state;
    const { classes, isLoggedIn } = this.props;

    return (
      <div className={classes.root}>
        {showErrorSnack ? (
          <MySnackBar message="Network Error! Please try again" color="red" />
        ) : null}
        <AppBar position="static">
          <Toolbar className={classes.toolBar}>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Button id="home" onClick={this.goTolanding}>
                <span style={{ fontSize: "1.2em", color: "#ffffff" }}>
                  YOYOGift
                </span>
              </Button>
            </Typography>
            {/* {this.props.isLoggedIn ? <Button color="inherit" onClick={this.addUpdateForm}>ADD UPDATE FORM</Button> : null} */}
            {isLoggedIn ? (
              <Button
                id="giftReceiveButton"
                className={Styles.headerButton}
                color="inherit"
                onClick={this.giftsReceived}
              >
                GIFTS RECEIVED
              </Button>
            ) : null}
            {isLoggedIn ? (
              <Button
                id="sendGiftButton"
                className={Styles.headerButton}
                color="inherit"
                onClick={this.giftsSend}
              >
                GIFTS SENT
              </Button>
            ) : null}
            {isLoggedIn ? (
              <Button
                id="profile"
                className={Styles.headerButton}
                color="inherit"
                onClick={this.myProfile}
              >
                {this.props.userDetails.first_name}
              </Button>
            ) : null}
            <Button
              id="authButton"
              className={Styles.headerButton}
              color="inherit"
              onClick={this.props.isLoggedIn ? this.logOut : this.logIn}
            >
              {isLoggedIn ? "LOGOUT" : "LOGIN"}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  goTolanding = () => {
    history.push("/");
  };
  myProfile = () => {
    history.push("/Profile");
  };

  giftsSend = () => {
    history.push("/GiftsSend");
  };

  giftsReceived = () => {
    history.push("/GiftsReceived");
  };

  logOut = () => {
    this.props.logout();
    history.push("/");
    window.sessionStorage.removeItem("login");
    window.localStorage.removeItem("user");
    window.sessionStorage.removeItem("usertype");
  };
  logIn = () => {
    history.push("/login");
  };
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export const mapStateToProps = state => {
  return {
    isLoggedIn: state.login.loginStatus,
    userDetails: state.login.detailsObject
  };
};

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ login, logout, createUser }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Header));
