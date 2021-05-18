import "./styles.scss";

import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
import AllBootcamps from "./Pages/AllBootcamps/AllBootcamps";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";

import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={HeaderComponent} />
        <Route path="/allbootcamps" component={AllBootcamps} />
      </Switch>
    </div>
  );
}
