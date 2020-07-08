import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import items from "./reducers/items";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["items"]
};

const rootReducer = combineReducers({
  items
});

export default persistReducer(persistConfig, rootReducer);
