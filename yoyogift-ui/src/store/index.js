import { combineReducers } from "redux";
import giftsReducer from "../modules/state/reducers/giftReducers/giftsReducer";
import loginReducer from "../modules/organisms/header/state/reducers/loginReducer";
import usersReducer from "../modules/state/reducers/userReducers/usersReducer";

const rootReducer = combineReducers({
  gifts: giftsReducer,
  login: loginReducer,
  users: usersReducer
});

export default rootReducer;
