import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import JoinUs from './Components/JoinUs';
import HomePage from './Components/HomePage';

function App() {
  let components = ['About-Us', 'Projects', 'Gallery']
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar components={components} />
            <HomePage />
          </Route>
          <Route exact path="/joinus">
            <Navbar components={['']}/>
            <JoinUs />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
