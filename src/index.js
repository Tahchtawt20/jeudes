import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Buteurs from './Partie1/Buteurs';
import App from './Partie2/App';
import { Provider } from 'react-redux';
import reducer from './Partie3/Config/Reducer';
import {legacy_createStore} from 'redux' ;
import Affichage from './Partie3/Affichage';


const store=legacy_createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store ={store}>
    <Affichage/>
  </Provider>
);

 // <React.StrictMode>
    // <Buteurs /> 
    //  <App /> 
    //  <Show /> 
  // </React.StrictMode>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
