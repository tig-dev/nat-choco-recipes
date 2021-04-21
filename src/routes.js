import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./components/app/app";
import ChocolateUsage from "./components/chocolate-usage/chocolate-usage";
import DishPage from "./components/dish-page/dish-page";
import ReferenceList from "./components/reference-list/reference-list";

// TODO: Update App instances with appropriate child components as added
const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/references">
        <App Child={ReferenceList} />
      </Route>
      <Route path="/usage">
        <App Child={ChocolateUsage} />
      </Route>
      <Route path={["/:dish/:tab", "/:dish"]}>
        <App Child={DishPage} />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
