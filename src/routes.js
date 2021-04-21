import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./components/app/app";
import ChocolateUsage from "./components/chocolate-usage/chocolate-usage";
import DishPage from "./components/dish-page/dish-page";
import ReferenceList from "./components/reference-list/reference-list";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={["/nat-choco-recipes/", "/"]}>
        <App />
      </Route>
      <Route path={["nat-choco-recipes/references", "/references"]}>
        <App Child={ReferenceList} />
      </Route>
      <Route path={["nat-choco-recipes/usage", "/usage"]}>
        <App Child={ChocolateUsage} />
      </Route>
      <Route
        path={[
          "/nat-choco-recipes/:dish/:tab",
          "/nat-choco-recipes/:dish",
          "/:dish/:tab",
          "/:dish",
        ]}
      >
        <App Child={DishPage} />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
