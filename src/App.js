import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import Details from './components/pages/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <switch>
          <Route exact component={Home} path="/"/>
          <Route  exact component={Details} path="/details/:id" />
        </switch>
      </Router>
      
    </div>
  );
}

export default App;
