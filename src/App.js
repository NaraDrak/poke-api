import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Principal from "./pages/Principal"
import DetallesPokemon from "./pages/DetallesPokemon"
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Principal}/>
        <Route exact path="/pokemon/:id" component={DetallesPokemon}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
