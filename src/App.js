import "./styles.scss";
import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
import CardComponent from "./Components/CardComponent/CardComponent";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";

import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={HeaderComponent} />
        <Route exact path="/allbootcamps" component={CardComponent} />
      </Switch>
    </div>
  );
}
