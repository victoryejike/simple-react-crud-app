import "./styles.scss";

import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
import AllBootcamps from "./Pages/AllBootcamps/AllBootcamps";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import SingleBootcamp from "./Pages/SingleBootcamp/SingleBootcamp";

import { Route, Switch } from "react-router-dom";
import { bootcampData } from "./utils/bootcampdata";

export default function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={HeaderComponent} />
        <Route exact path="/allbootcamps" component={AllBootcamps} />
        <Route
          exact
          path="/singlebootcamps/:id"
          render={(props) => <SingleBootcamp {...props} data={bootcampData} />}
        />
      </Switch>
    </div>
  );
}
