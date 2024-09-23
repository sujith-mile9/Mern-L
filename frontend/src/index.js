import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './components/assets/styles/bootstrap.custom.css';
import './components/assets/styles/index.css'


import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import HomeS from './Screens/HomeS';
import ProductS from './Screens/ProductS';


import { Provider } from 'react-redux';
import store from './store';
import CartS from './Screens/CartS';
import LoginS from './Screens/LoginS';
import RegisterS from './Screens/RegisterS';


const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/' element={<App/>}>
          <Route index={true} path='/'element={<HomeS/>}/>
          <Route  path='/product/:id'element={<ProductS/>}/>
          <Route  path='/cart'element={<CartS/>}/>
          <Route  path='/login'element={<LoginS/>}/>
          <Route  path='/register'element={<RegisterS/>}/>
      </Route>
   )
)
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>

    <Provider store={store}>
         <RouterProvider router={router}/>
    </Provider>
   

  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
