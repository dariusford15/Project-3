//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { NavLink} from "react-router-dom";
import Todos from "./components/Todos.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";



function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav-ul">
            <li className="navlink">
               <NavLink to="/" exact activeClassName='selected'>Todos</NavLink>
            </li>
            <li className="navlink">
              <NavLink to="/about" activeClassName="selected">About</NavLink>
            </li>
            <li className="navlink">
              <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
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