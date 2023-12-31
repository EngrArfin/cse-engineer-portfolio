import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/Shared/About/About";
import Portfolio from "../pages/Home/Shared/Portfolio/Portfolio";
import Contract from "../pages/Home/Shared/Contract/Contract";
import Development from "../pages/Home/Shared/Development/Development";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
          {
              path: '/',
              element: <Home></Home>
          },
          {
            path: '/about',
            element: <About></About>
          },
          {
            path: 'portfolio',
            element: <Portfolio></Portfolio>
          },
          {
            path: 'development',
            element: <Development></Development>
          },
          {
            path: '/contract',
            element: <Contract></Contract>
          }
      ]
    },
    
  ]);