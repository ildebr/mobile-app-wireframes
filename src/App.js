import logo from './logo.svg';
// import './App.css';
import "./App.scss"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Home from "./pages/Home/Home"
import WelcomeBack from './pages/WelcomeBack/WelcomeBack';
import Register from './pages/Register/Register';
import Addcharger from './pages/Addcharger/Addcharger';
import Selectcharger from './pages/Selectcharger/SelectCharger';
import Payment from './pages/Payment/Payment';
import Congratulations from './pages/Congratulations/Congratulations';
import Homecharger from './pages/Homecharger/Homecharger';
import Thankyou from './pages/Thankyou/Thankyou';
import Plugtime from './pages/Plugtime/Plugtime';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path:"/welcome",
      element: <WelcomeBack />
    },
    {
      path:"/register",
      element: <Register />
    },
    {
      path:'/addcharger',
      element: <Addcharger />
    },
    {
      path: '/selectcharger',
      element: <Selectcharger />
    },
    {
      path: '/payment',
      element: <Payment />
    },
    {
      path: '/congratulations',
      element: <Congratulations />
    },
    {
      path: '/home',
      element: <Homecharger />
    },
    {
      path: '/thankyou',
      element: <Thankyou />
    },
    {
      path: '/when',
      element: <Plugtime />
    }
  ])
  return (
    <div className="App" id='light'>
        <RouterProvider router={router} />
        <div className='error-screen'>
          <h1>Please set the screen size at a mobile size of less than 450px in order to see the wireframes.</h1>
        </div>
    </div>
  );
}

export default App;
