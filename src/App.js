//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Todos from "./components/Todos.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";



function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav-ul">
            <li className="navlink active">
              <Link to="/">Todos</Link>
            </li>
            <li className="navlink">
              <Link to="/about">About</Link>
            </li>
            <li className="navlink">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Todos}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;