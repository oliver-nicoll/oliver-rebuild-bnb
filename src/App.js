import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import SearchPage from './Components/SearchPage/SearchPage';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  
  return (

    //BEM

    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>


        </Switch>

        <Footer />
      </ Router>
    </div>
  );
}

export default App;
