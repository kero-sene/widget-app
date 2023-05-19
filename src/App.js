import React from "react";
import Weather from "./pages/weather"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const App = () => {
  return (
    <>
    <HashRouter basename='/'>
    <Routes>
      <Route exact path="/"></Route>
      <Route path='/weather' component={<Weather />}> </Route>
    </Routes>
    </HashRouter>
    </>
  );
};

export default App;
