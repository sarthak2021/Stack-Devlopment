
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from './components/navbar';
import Employees from './components/employees';
//import Addemployee from './components/addemployee';
import Register from './components/register';

import {BrowserRouter,Switch, Route, } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Employees}/>
      <Route exact path="/register" component={Register}/>
    </Switch>
    
    </>
    </BrowserRouter>
  );
}

export default App;
