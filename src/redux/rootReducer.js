import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices
import authReducer from "./slices/auth";
import propertiesReducer from "./slices/properties";
import attributesReducer from "./slices/attributes";

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
});

export { rootPersistConfig, rootReducer };
