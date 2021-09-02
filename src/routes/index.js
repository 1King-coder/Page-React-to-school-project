import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './myRoute';
import Login from '../pages/Login';
import Student from '../pages/Student';
import Students from '../pages/Students';

import Register from '../pages/Register';
import Page404 from '../pages/404';
import StudentEdit from '../pages/StudentEdit';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/students" component={Students} isClosed={false} />
      <MyRoute
        exact
        path="/student/:id/edit"
        component={StudentEdit}
        isClosed
      />
      <MyRoute exact path="/student/:id/delete" component={Student} isClosed />
      <MyRoute exact path="/login/" component={Login} isClosed={false} />
      <MyRoute exact path="/register/" component={Register} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
