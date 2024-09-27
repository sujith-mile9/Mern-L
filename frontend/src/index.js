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
import ShippingS from './Screens/ShippingS';
import PrivateRoute from './components/PrivateRoute';
import PaymentS from './Screens/PaymentS';
import PlaceOrderS from './Screens/PlaceOrderS';
import OrderS from './Screens/OrderS';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import ProfileS from './Screens/ProfileS';
const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/' element={<App/>}>
          <Route index={true} path='/'element={<HomeS/>}/>
          <Route  path='/product/:id'element={<ProductS/>}/>
          <Route  path='/cart'element={<CartS/>}/>
          <Route  path='/login'element={<LoginS/>}/>
          <Route  path='/register'element={<RegisterS/>}/>

          <Route path='' element={<PrivateRoute/>}>

          <Route  path='/shipping'element={<ShippingS/>}/>
          <Route  path='/payment'element={<PaymentS/>}/>
          <Route  path='/placeorder'element={<PlaceOrderS/>}/>
          <Route  path='/order/:id'element={<OrderS/>}/>
          <Route  path='/profile'element={<ProfileS/>}/>
          
          </Route>
      </Route>
   )
)
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>

    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
          <RouterProvider router={router}/>
      </PayPalScriptProvider>
        
    </Provider>
   

  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
