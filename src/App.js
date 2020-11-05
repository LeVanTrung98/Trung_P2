import { Switch, Route, Router, Redirect } from 'react-router-dom';
import Dashboard from "../src/admins/Dashboard";
import HomePage from "../src/users/index";
import PrivateRouter from "../src/common/PrivateRouter";
import Login from "../src/common/Login";
import '../src/styles/App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/login" component={ Login } />
        <PrivateRouter path="/dashboard" > 
            <Dashboard />
        </PrivateRouter>
      </Switch>
    </div>
  );
}
export default App;
