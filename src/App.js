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
import MyItem from './Components/MyItem/MyItem';
import Details from './Components/Details/Details';
import Update from './Components/Update/Update';

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
            <Route exact path = '/my'>
              <MyItem></MyItem>
            </Route>
            <Route exact path = '/manage'>
             <ManageItem></ManageItem>
            </Route>
            <Route path='/details/:id'>
                <Details></Details>
            </Route>

            <Route path='/update/:id'>
               <Update></Update>
            </Route>

            <Route exact path = '/home'>
                <Home></Home>
            </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
