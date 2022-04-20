import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import simple_test ./simple_test'
import rootReducer from './modules'


const store = createStore(rootReducer)
const root = createRoot(document.getElementById('root'))
// console.log(store.getState())

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
