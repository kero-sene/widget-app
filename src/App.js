import React from "react";
import Weather from "./pages/weather"
import Countdown from "./pages/countdown"
import { Routes, HashRouter, Route} from 'react-router-dom';
const App = () => {
  return (
    <>
    <HashRouter basename='/'>
      <Routes>
      <Route path="/"></Route>
      <Route path='/weather' element={<Weather />}> </Route>
      <Route path='/countdown' element={<Countdown />}> </Route>
      </Routes>
    </HashRouter>
    </>
  );
};

export default App;