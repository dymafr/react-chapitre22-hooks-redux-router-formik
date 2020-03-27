import React, { lazy, Suspense } from "react";
import {
  Route,
  Switch,
  Redirect,
  useLocation,
  useRouteMatch,
  useParams,
  useHistory
} from "react-router-dom";

const LazyTodos = lazy(() => import("./features/todos"));

const App = () => {
  // const location = useLocation();
  // const match = useRouteMatch();
  // const params = useParams();
  // const history = useHistory();

  // console.log({ location, match, params, history });

  return (
    <div className="container p-5">
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Switch>
          <Route path="/todos/:filter" component={LazyTodos} />
          <Redirect to="/todos/all" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
