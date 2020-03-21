import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import MainPage from "./pages/MainPage"
import BlogPost from "./components/BlogPost"
import BlogPage from "./pages/BlogPage"
import LogoBox from "./components/LogoBox"
import {Container} from "./components/Grid"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Brand.css"

function App() {
  return (
    <div id="screen">
        <Container>
          <div id="layout">
          <LogoBox />
          <Router>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/blog" component={BlogPage} />
              <Route path="/post/:slug" component={BlogPost} />
            </Router>

        </div>
      </Container>
    </div>
  );
}

export default App;
