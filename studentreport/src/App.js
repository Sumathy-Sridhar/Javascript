import './App.css';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import AxiosFetch from './components/AxiosFetch';
import DisplayForm from './components/DisplayForm';
import Firstpg from './components/Firstpg';
import Home from './components/Home';
import Studentprofile from './components/Studentprofile';

function App() {
  return (
    <Router>
    <div className="App">  
 <div>
          <Link to="/">Home</Link> <br></br>
          <Link to="/first">First Page</Link><br></br>
          <Link to="/studform">Student Form</Link><br></br>
          <Link to="/display">Fetch data</Link> <br></br>
          <Link to="/Axios">AxiosFetch</Link> <br></br>
  </div>
   <Switch>
   <Route path="/" exact component={Home}></Route>
   <Route path="/first" exact component={Firstpg}></Route>
   <Route path="/studform" exact component={Studentprofile}></Route>
   <Route path="/display" exact component={DisplayForm}></Route>
   <Route path="/axios" exact component={AxiosFetch}></Route>
   </Switch>
    </div>
    </Router>
  );
}


export default App;
