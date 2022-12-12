import './App.css';
import { Switch, Route, Router } from "react-router-dom"
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Product from './Components/Product';

function App() {
  return (
    <>
    {/* <Router> */}

        <Navbar />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/product" >
          <Product />
        </Route>
      </Switch>
        {/* </Router> */}
    </>
  );
}

export default App;
