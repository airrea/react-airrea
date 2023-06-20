import React from 'react';
import 'animate.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LandingPage
 from './Components/LandingPage';
 import Timeline from './Components/Timeline';
 import Home from './Components/Home';
const router = createBrowserRouter([
  {
    path:'/', 
    element:<LandingPage />, 
    children:[{
      index: true, 
      element: <Home />
    },{
      path:'timeline', 
      element:<Timeline />
    }]
   
  }, 
 
])




const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App