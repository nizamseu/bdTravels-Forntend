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

function App() {
  return (
    <div className="App">

    <Router>
    <Navbar></Navbar>
        <Switch>

            <Route exact path = '/'>
                <Home></Home>
            </Route>

            <Route exact path = '/detail'>
               <Detail></Detail>
            </Route>

            <Route exact path = '/about'>
              <About></About>
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
