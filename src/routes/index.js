import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './myRoute';
import Login from '../pages/Login';
import StudentDelete from '../pages/StudentDelete';
import Students from '../pages/Students';
import AddStudent from '../pages/AddStudent';
import Register from '../pages/Register';
import Page404 from '../pages/404';
import Home from '../pages/Home';
import AnswerQuestions from '../pages/AnswerQuestions';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/students" component={Students} isClosed={false} />
      <MyRoute
        exact
        path="/add-student"
        component={AddStudent}
        isClosed={false}
      />
      <MyRoute
        exact
        path="/answer-questions/:id"
        component={AnswerQuestions}
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
