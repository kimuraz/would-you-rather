import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-redux-dom';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={RedirectControl}/>
        <Route path='/login' component={Login}/>
        <Route path='/home' component={Home}/>
        <Route path='/newQuestion' component={NewQuestion}/>
        <Route path='/leaderBoard' component={Home}/>
      </Router>
    </div>
  );
}

export default App;
