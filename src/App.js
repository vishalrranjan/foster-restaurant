import React from 'react';
import './App.css';
import Login from './Component/Login/Login';
import  { BrowserRouter as Router, Route } from 'react-router-dom'
import VerifyLogin from './Component/Login/VerifyLogin';
import RestaurentList from './Component/Restaurant/RestaurentList';
import Image from './Component/Restaurant/Image';

function App() {
  
  return (
    <Router>
        <div>
          {/* <ProtectedRoute path="/" component={Home} /> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={VerifyLogin} />
          <Route exact path="/list" component={ RestaurentList } />
          <Route exact path="/image" component={ Image } />
        </div>
      </Router>
  );
}

export default App;
