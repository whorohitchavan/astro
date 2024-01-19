// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import SuccessPage from './SuccessPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginForm} />
        <Route path="/success" component={SuccessPage} />
      </Switch>
    </Router>
  );
};

export default App;

