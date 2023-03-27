import './App.scss';
import Background from './components/Background/Background';
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Background/>
      <Navbar/>
      <Switch>
        <Route path="/About">
          <About/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
