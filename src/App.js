import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";

import Home from "./components/Home";
import BookDetail from "./components/BookDetail";

import "./App.css";

const App = (props) => {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <div className="Inner">
            <Link to="/" className="Logo">
              <img
                href="https://rawgit.com/eggheadio-projects/add-internationalization-i18n-to-a-react-app-using-react-intl/006d466ca1fca8f9bd772390a2d5b5e421676186/01-install-and-configure-react-intl/src/books.svg"
                alt="Logo"
              />
              <h2>On My Shelf</h2>
            </Link>
          </div>
        </div>

        <div className="Container Inner">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/book/:bookId' component={BookDetail}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
