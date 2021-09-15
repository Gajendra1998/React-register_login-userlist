import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Register from './components/Register';
import UserList from './components/UserList';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/userlist" component={UserList}/>
        </Switch>
        </Router>
    </div>
  );
}
export default App;
