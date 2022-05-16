import './App.css';
import Home from './pages/Home';

import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}></Route>
      </Switch>
    </Router>
  )
}

  export default App;
