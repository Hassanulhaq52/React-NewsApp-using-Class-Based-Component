import "./App.css";
import React, { Component } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

pageSize = 5;
apiKey = process.env.REACT_APP_NEWS_API

state = {
  progress : 0
}

setProgress = (progress) => {

this.setState({progress: progress})

}

  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <LoadingBar
          height={5}
        color='#f11946'
        progress={this.state.progress}
   
      />


          <Routes>
            <Route exact
              path="/home"
              element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key={'home'} pageSize = {this.pageSize} country="in" category="general" />}
            />
          </Routes>

          <Routes>
            <Route exact
              path="/business"
              element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key={'business'} pageSize = {this.pageSize} country="in" category="business" />}
            />
          </Routes>


          <Routes>
            <Route exact
              path="/entertainment"
              element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key={'entertainment'} pageSize = {this.pageSize} country="in" category="entertainment" />}
            />
          </Routes>      

          <Routes>
            <Route exact
              path="/general"
              element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key={'general'} pageSize = {this.pageSize} country="in" category="general" />}
            />
          </Routes>

          <Routes>
            <Route exact
              path="/health"
              element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key={'health'} pageSize = {this.pageSize} country="in" category="health" />}
            />
          </Routes>

          <Routes>
            <Route exact
              path="/science"
              element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key={'science'} pageSize = {this.pageSize} country="in" category="science" />}
            />
          </Routes>

          <Routes>
            <Route exact
              path="/sports"
              element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key={'sports'} pageSize = {this.pageSize} country="in" category="sports" />}
            />
          </Routes>

          <Routes>
            <Route exact
              path="/technology"
              element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key={'technology'} pageSize = {this.pageSize} country="in" category="technology" />}
            />
          </Routes>


        </Router>
      </div>
    );
  }
}
