import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./components/app/app";
import ChocolateUsage from "./components/chocolate-usage/chocolate-usage";
import DishPage from "./components/dish-page/dish-page";
import ReferenceList from "./components/reference-list/reference-list";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={["/", "/nat-choco-recipes/"]}>
        <App />
      </Route>
      <Route path={["/references", "/nat-choco-recipes/references"]}>
        <App Child={ReferenceList} />
      </Route>
      <Route path={["/usage", "/nat-choco-recipes/usage"]}>
        <App Child={ChocolateUsage} />
      </Route>
      <Route
        path={[
          "/:dish/:tab",
          "/:dish",
          "/nat-choco-recipes/:dish/:tab",
          "/nat-choco-recipes/:dish",
        ]}
      >
        <App Child={DishPage} />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
