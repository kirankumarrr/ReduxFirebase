import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";
import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";
import createHistory from "history/createBrowserHistory";
import LoadingScreen from ".././components/layouts/Spinner";
//We dont want other loader we got our own spinner svg
//import LoadingScreen from "components/LoadingScreen"; // change it to your custom component

const locationHelper = locationHelperBuilder({});
const history = createHistory();

export const UserIsAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: "UserIsAuthenticated",
  AuthenticatingComponent: LoadingScreen,
  allowRedirectBack: true,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || "/login",
  authenticatingSelector: ({ firebase: { auth, profile, isInitializing } }) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && !auth.isEmpty

  // We dont want this bcoz we are not dispactching anything over here
  // redirectAction: newLoc => dispatch => {
  //   browserHistory.replace(newLoc); // or routerActions.replace
  //   dispatch({ type: "UNAUTHED_REDIRECT" });
  // }
});

export const UserIsNotAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: "UserIsNotAuthenticated",
  AuthenticatingComponent: LoadingScreen,
  allowRedirectBack: false,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || "/",
  authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && auth.isEmpty
  // We dont want this bcoz we are not dispactching anything over here
  // redirectAction: newLoc => dispatch => {
  //   browserHistory.replace(newLoc); // or routerActions.replace
  //   dispatch({ type: "UNAUTHED_REDIRECT" });
  // }
});

// The reason of  this helpers auth.js

{
  /*
We are integrating this authgaurd which is different package provided by redux

1) When user not logged in And we want him to navigate to login page : This process can be done
using authguard 
Since authguard is not avaiable in react we are using redux-auth-wrapper
https://github.com/prescottprue/react-redux-firebase/blob/master/docs/recipes/routing.md

The differece in React and Angular is
Authgaurd is default avaiable in angular 


 */
}
