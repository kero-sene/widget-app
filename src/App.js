import React from "react";
import Weather from "./pages/weather"
import { HashRouter, Route} from 'react-router-dom';
const App = () => {
  return (
    <>
    <HashRouter basename='/'>
      <Route exact path="/"></Route>
      <Route path='/weather' component={<Weather />}> </Route>
    </HashRouter>
    </>
  );
};

export default App;