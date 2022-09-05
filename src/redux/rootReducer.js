import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices
import authReducer from "./slices/auth";
import propertiesReducer from "./slices/properties";
import attributesReducer from "./slices/attributes";
import usersReducer from "./slices/users";
import ownersReducer from "./slices/owners";
import externalAdvisersReducer from "./slices/externalAdvisers";
import alliesReducer from "./slices/allies";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  auth: authReducer,
  properties: propertiesReducer,
  attributes: attributesReducer,
  users: usersReducer,
  owners: ownersReducer,
  externalAdvisers: externalAdvisersReducer,
  allies: alliesReducer
});

export { rootPersistConfig, rootReducer };
