import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Inicio from './pages/inicio';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Inicio} />
      <Route path="/inicio" exact component={Inicio} />
    </Router>
  )
}

export default App;