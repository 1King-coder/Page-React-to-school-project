import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './myRoute';
import Login from '../pages/Login';
import StudentDelete from '../pages/StudentDelete';
import Students from '../pages/Students';
import StudentAdd from '../pages/StudentAdd';
import Register from '../pages/Register';
import Page404 from '../pages/404';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/students" component={Students} isClosed={false} />
      <MyRoute
        exact
        path="/add-student"
        component={StudentAdd}
        isClosed={false}
      />
      <MyRoute exact path="/" component={Home} isClosed={false} />
      <MyRoute
        exact
        path="/student/:id/delete"
        component={StudentDelete}
        isClosed
      />
      <MyRoute exact path="/login/" component={Login} isClosed={false} />
      <MyRoute exact path="/register/" component={Register} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
