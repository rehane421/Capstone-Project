import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../../../assets/css/Profile.module.css";
import Paper from "@material-ui/core/Paper";

export const Profile = props => {
  let {
    email,
    first_name,
    last_name,
    socialProfileLink,
    image,
    balance_points
  } = props.detailsObject;
  return (
    <React.Fragment>
      <br />
      <br />
      {/* <div className="row">
        <div className="col-md-12">
          {" "}
          <label className="">
            <h1>Your Profile</h1>{" "}
          </label>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          {" "}
          <label className="">
            {" "}
            <img
              className="img-fluid"
              alt="profile"
              src={image}
              height="150"
              width="150"
            />
          </label>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-4">
          {" "}
          <label className="">Name</label>
        </div>
        <div className="col-md-8">
          {" "}
          <label className="">
            {" "}
            {firstName} {lastName}
          </label>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-4">
          {" "}
          <label className="">Email </label>
        </div>
        <div className="col-md-8">
          {" "}
          <label className="">{email} </label>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-4">
          {" "}
          <label className="">Gender </label>
        </div>
        <div className="col-md-8">
          {" "}
          <label className="">gender </label>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-4">
          {" "}
          <label className="">Social Link </label>
        </div>
        <div className="col-md-8">
          {" "}
          <label className="">
            {" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={socialProfileLink}
            >
              {socialProfileLink}
            </a>
          </label>
        </div>
      </div>
      <hr /> */}
      <div className={Styles.profileHeader}>
        <img className={Styles.profileImg} alt="profile" src={image} />
      </div>
      <div className={Styles.profileContent}>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <label className={Styles.label}>
              Name: {first_name} {last_name}
            </label>
            <label className={Styles.label}>User Id: {email}</label>
            {socialProfileLink ? (
              <label className={Styles.label}>Social Profile Contact</label>
            ) : null}
            <label className={Styles.label}>
              Balance Points: {balance_points}
            </label>
          </Grid>
          <Grid item xs={8}>
            {socialProfileLink ? (
              <Paper className={Styles.profileValues}>
                {socialProfileLink}
              </Paper>
            ) : null}
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Profile;
