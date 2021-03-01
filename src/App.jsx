import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import MainPage from './Pages/MainPage'
import NoteBook from './Pages/NoteBook'

function App() {
  return (
    <Router>


      <Route path='/' exact component={MainPage} />
      <Route path='/NoteBook' exact component={NoteBook} />

    </Router>
  );
}

export default App;
