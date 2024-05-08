// import logo from './logo.svg';
import './App.css';
import Rofls from "./Rofls";
import MainPage from './MainPage';
import Collections from './Collections';
import EnterUser from './EnterUser';
import RegUser from './RegUser';
import Item from './Item';
import Promotions from './Promotions';
import SignUp from './SignUp';
import ShoppingCard from './ShoppingCard';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/collections",
    element: <Collections />,
  },
  {
    path: "/enter",
    element: <EnterUser />,
  },
  {
    path: "/registration",
    element: <RegUser />,
  },
  {
    path: "/zatrolen_loh",
    element: <Rofls />,
  },
  {
    path: "/item",
    element: <Item />,
  },
  {
    path: "/promotions",
    element: <Promotions />,
  },
  {
    path: "/sign_up",
    element: <SignUp />,
  },
  {
    path: "/shopping_card",
    element: <ShoppingCard />,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
