import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Bookings from "../../pages/Bookings/Bookings";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Hotels from "../../pages/Hotels/Hotels";

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
        loader: ({params}) => fetch(`https://travel-guru-firebase-server.vercel.app/places/${params.name}`),
        element: <Bookings></Bookings>
      },
      {
        path: '/hotels/:place',
        loader: ({params}) => fetch(`https://travel-guru-firebase-server.vercel.app/hotels/${params.place}`),
        element: <Hotels></Hotels>
      }
    ]
  }
])