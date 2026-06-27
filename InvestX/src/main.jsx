
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import Signup from './landing/signup/Signup.jsx'
import Aboutpage from './landing/about/Aboutpage.jsx'
import Productpage from './landing/products/Productpage.jsx';
import Pricingpage from './landing/pricing/Pricingpage.jsx';

import Navbar from './landing/Navbar.jsx';
import Footer from './landing/Footer.jsx';
import Notfound from './Notfound.jsx';
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element= {<App></App>}></Route>
      <Route path='/signup' element= {<Signup></Signup>}></Route>
      <Route path='/about' element= {<Aboutpage></Aboutpage>}></Route>
      <Route path='/product' element= {<Productpage></Productpage>}></Route>
      <Route path='/pricing' element= {<Pricingpage></Pricingpage>}></Route>
      <Route path='*' element={<Notfound></Notfound>}></Route>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
)
