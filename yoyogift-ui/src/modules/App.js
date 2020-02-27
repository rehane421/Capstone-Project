import React, { Component } from "react";
import Loadable from "react-loadable";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "../modules/organisms/header/components/Header";
import Footer from "../modules/atoms/Footer/Footer";
import Landing from "./organisms/landing/Landing";
import history from "./util/history";
import LinearProgress from "@material-ui/core/LinearProgress";
import { LocalizeProvider } from "react-localize-redux";
import Login from "../modules/organisms/header/components/Login";

export function Loading({ error }) {
  if (error) {
    return (
      <h2
        style={{
          height: "40px",
          background: "#b3d9f7",
          color: "white",
          textAlign: "center",
          verticalAlign: "middle",
          paddingTop: "5px",
          fontSize: "20px",
          fontWeight: "500"
        }}
      >
        Oh nooess! Something went wrong. Try re-loading!
      </h2>
    );
  } else {
    return <LinearProgress color="secondary" />;
  }
}

export const GiftsListContainer = Loadable({
  loader: () => import("./organisms/GiftContainer/GiftsListContainer"),
  loading: Loading
});

export const ProfileContainers = Loadable({
  loader: () => import("./organisms/ProfileContainer/ProfileContainers"),
  loading: Loading
});

export const GiftShowContainer = Loadable({
  loader: () => import("./organisms/GiftContainer/GiftShowContainer"),
  loading: Loading
});

export const GiftsSendContainer = Loadable({
  loader: () => import("./user/containers/GiftsSendContainer"),
  loading: Loading
});

export const GiftsReceivedContainer = Loadable({
  loader: () => import("./user/containers/GiftsReceivedContainer"),
  loading: Loading
});

export const AddUpdateForm = Loadable({
  loader: () => import("./admin/components/AddUpdateForm"),
  loading: Loading
});

export const ErrorPage = Loadable({
  loader: () => import("./common/components/ErrorPage"),
  loading: Loading
});

export class App extends Component {
  render() {
    return (
      <LocalizeProvider>
        <Header />
        <Router history={history}>
          <Switch>
            {/* <Route path="/giftCards/new" exact component={GiftCreateContainer} /> */}
            <Route exact path="/giftCards/:id" component={GiftShowContainer} />
            <Route exact path="/giftCards" component={GiftsListContainer} />
            <Route exact path="/Profile" component={ProfileContainers} />
            <Route exact path="/GiftsSend" component={GiftsSendContainer} />
            <Route exact path="/Login" component={Login} />
            <Route
              exact
              path="/GiftsReceived"
              component={GiftsReceivedContainer}
            />
            <Route exact path="/AddUpdateForm" component={AddUpdateForm} />
            <Route exact path="/AddUpdateForm/:id" component={AddUpdateForm} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/404" component={ErrorPage} />
            <Redirect to="/404" />
          </Switch>
        </Router>
        <Footer />
      </LocalizeProvider>
    );
  }
}

export default App;
