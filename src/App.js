import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Home from './Views/Home';
import HomeUnsplash from './Views/HomeUnsplash';
import Topics from './Views/Topics';
import TopicsUnsplash from './Views/TopicsUnsplash';
import TopicsList from './Views/TopicsList';
import TopicImageList from './Views/TopicImageList';

function App() {
  return (
    
    <div className="App">
      <Router>

        <Header /> 
        <Navigation /> 
        
        <Switch>
          <Route exact path="/">
            <Home />
            {/* <HomeUnsplash /> */}
          </Route>

          <Route exact path="/topics">
            <Topics />
            {/* <TopicsUnsplash /> */}
          </Route>

        </Switch>

        {/* <Footer />  */}

        {/* <TopicsList /> */}
        {/* <TopicImageList /> */}

      </Router>
    </div>
      
  );
}

export default App;
