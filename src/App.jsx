import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import MainPage from './Pages/MainPage'
import NoteBook from './Pages/NoteBook'
import LoginPage from './Pages/LoginPage'
import './css/styles.css'

function App() {
  return (
    <Router>


      <Route path='/' exact component={MainPage} />
      <Route path='/NoteBook' exact component={NoteBook} />
      <Route path='/LoginPage' exact component={LoginPage} />

    </Router>
  );
}

export default App;
