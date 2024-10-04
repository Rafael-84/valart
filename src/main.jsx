import React from 'react'
import ReactDom from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import {router} from './App.jsx'
import './index.css'

import { register } from 'swiper/element';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)