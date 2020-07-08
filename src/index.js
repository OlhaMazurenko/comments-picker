import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import rootReducer from "./store/RootReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import View from "./views/View";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const pStore = persistStore(store);


ReactDOM.render(
  <Provider store={store}>
     <PersistGate persistor={pStore}>
       <View />
     </PersistGate>
  </Provider>,
  document.getElementById('root')
);
