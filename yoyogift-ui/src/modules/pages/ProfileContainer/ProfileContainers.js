import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "../../molecules/Profile/Profile";
import { Redirect } from "react-router-dom";
import { userDetails } from "../../state/actions/userAction";
import PropTypes from "prop-types";

export class ProfileContainers extends Component {
  componentDidMount() {
    if (this.props.detailsObject)
      this.props.userDetails(this.props.detailsObject.id);
  }
  render() {
    if (this.props.isLoggedIn) {
      return (
        <Profile
          detailsObject={{
            ...this.props.detailsObject,
            balance_points: this.props.user.balance_points
          }}
        />
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

ProfileContainers.propTypes = {
  isLoggedIn: PropTypes.bool
};

export const mapStateToProps = state => {
  return {
    isLoggedIn: state.login.loginStatus,
    detailsObject: state.login.detailsObject,
    user: state.users.UserDetails
  };
};

export default connect(mapStateToProps, { userDetails })(ProfileContainers);
