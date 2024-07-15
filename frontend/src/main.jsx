import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider,createRoutesFromElements} from 'react-router'
import {createBrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux"
import store from './redux/features/store.js'

// components
import App from './App.jsx'
import Signup from './pages/Auth/Signup.jsx'
import Signin from './pages/Auth/Signin.jsx'
import Cart from './pages/user/Cart.jsx'
import Product from './pages/user/Product.jsx'
import Profile from './pages/user/Profile.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
   <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
