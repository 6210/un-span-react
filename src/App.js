import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import HelloWorld from './Components/HelloWorld';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Home from './Views/Home';
import Topics from './Views/Topics';

function App() {
  return (
    
    <div className="App">
      <Router>

        <Header /> 

        <HelloWorld /> 

        <Navigation /> 
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/topics">
            <Topics />
          </Route>
        </Switch>

        <Footer /> 

      </Router>
    </div>
      
  );
}

export default App;
