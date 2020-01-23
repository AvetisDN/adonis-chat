import React, { useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Room from './views/Room';
import Rooms from './views/Rooms';
import { API_HEALTHCHECK } from './actions';

const App = () => {
  useEffect(() => {
    API_HEALTHCHECK();
  }, []);

  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact render={({ history }) => <Home history={history} />} />
        <Route path="/rooms" render={({ history }) => <Rooms history={history} />} />
        <Route path="/room/:id" render={({ history, match }) => <Room id={match.params.id} history={history} />} />
      </Switch>
    </HashRouter>
  )
};

export default App;
