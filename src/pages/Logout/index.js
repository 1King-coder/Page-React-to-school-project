import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Logout() {
  const dispatch = useDispatch();

  function logout() {
    toast.success('Você se deconectou com sucesso.');
    dispatch(actions.loginFailure());
    history.push('/');
  }

  logout();

  return <Container />;
}
