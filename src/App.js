import { Button, Radio } from 'antd';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Home/Header/Navbar';
import Detail from './Components/Detail/Detail';
import About from './Components/About/About';
import Login from './Components/LogIn/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ManageItem from './Components/ManageItem/ManageItem';
import NotFound from './Components/404/NotFound.js';
import MyItem from './Components/MyItem/MyItem';
import Details from './Components/Details/Details';
import Update from './Components/Update/Update';
import Footer from './Components//Footer/Footer';
import ManageItemMain from './Components/ManageItem/ManageItemMain';


function App() {
  return (
    <div className="App">

    <Router>
    <Navbar></Navbar>
        <Switch>

            <Route exact path = '/'>
                <Home></Home>
            </Route>

            <PrivateRoute exact path = '/detail/:from'>
               <Detail></Detail>
            </PrivateRoute>

            <Route exact path = '/login'>
            <Login></Login>
            </Route>

            <Route exact path = '/about'>
              <About></About>
            </Route>
            <PrivateRoute path = '/my'>
              <MyItem></MyItem>
            </PrivateRoute>
            <PrivateRoute exact path = '/manage'>
             <ManageItemMain></ManageItemMain>
            </PrivateRoute>
            <Route path='/details/:id'>
                <Details></Details>
            </Route>

            <Route path='/update/:id'>
               <Update></Update>
            </Route>

            <Route exact path = '/home'>
                <Home></Home>
            </Route>

            <Route  path = '*'>
               <NotFound></NotFound>
            </Route>
        </Switch>
        <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
