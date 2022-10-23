import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Bookings from "../../pages/Bookings/Bookings";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/booking/:name',
        loader: ({params}) => fetch(`http://localhost:5000/places/${params.name}`),
        element: <Bookings></Bookings>
      }
    ]
  }
])