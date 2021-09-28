// import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Inbox from './Inbox';
import Add from './Add';
import Register from './Register';
import Welcome from './Welcome';
import Login from './Login';
import Today from './Today';
import Completed from './Completed';
import Notcompleted from './Notcompleted';
import Starred from './Starred';
import App1 from './keep/App1';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Listitem from './Listitem';
import React,{useState} from 'react';
const CredentialsContext = React.createContext(null);

function App() {
  const credentialState = useState(null);
  return (
    <div className="App">
    <CredentialsContext.Provider value={credentialState}>
    <div className="app_page">
    <Router>
      <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route exact path="/add">
        <Sidebar />
        <Add />
      </Route>
      <Route exact path="/inbox">
        <Sidebar />
        <Inbox />
      </Route>
      <Route exact path="/starred">
        <Sidebar />
        <Starred />
      </Route>
      <Route exact path='/register'>
        <Register />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path="/today">
        <Sidebar />
        <Today />
      </Route>
      <Route exact path="/listitem/:id1" component={(props)=>console.log(props)}>
        <Sidebar />
        <Listitem />
      </Route>
      <Route exact path="/completed">
        <Sidebar />
        <Completed />
      </Route>
      <Route exact path="/notcompleted">
        <Sidebar />
        <Notcompleted />
      </Route>
      <Route exact path='/keep/:userid' component={(props)=>console.log(props)}>
        <App1 />
      </Route>
      </Switch>
    </Router>
    </div>
    </CredentialsContext.Provider>
    </div>
  );
}

export default App;
export {CredentialsContext};
