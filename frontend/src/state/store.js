import {
	legacy_createStore,
	applyMiddleware,
	combineReducers,
	compose,
} from "redux";
import thunk from "redux-thunk";
import registrationReducer from "./auth/register/reducerRegister";
import authenticationReducer from "./auth/login/reducerLogin";
import {reducer as appReducer} from "./app/reducer"

const rootReducer = combineReducers({
	register: registrationReducer,
	login: authenticationReducer,
  	appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);
