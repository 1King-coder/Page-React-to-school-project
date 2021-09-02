import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';

export default function StudentAdd() {
  const [fullname, setFullname] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line
  async function storeStudent(data) {
    try {
      setIsLoading(true);
      await axios.post(`/students`, data);

      return setIsLoading(false);
    } catch (error) {
      toast.error('Estudante já existente.');
      setIsLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      storeStudent();

      toast.success('Estudante criado com sucesso.');
      history.push('/answer-questions');
      return setIsLoading(false);
    } catch (error) {
      return toast.error('Não foi possível estabelecer comunicação com a API.');
    }
  }

  return (
    <Container>
      <h1>Entre com seus dados</h1>
      <Loading isLoading={isLoading} />

      <Form onSubmit={handleSubmit}>
        <label htmlFor="fullname">
          Digite seu nome completo ou seu primeiro nome:
          <input type="button" value="Sim" onClick={handleSubmit} />
        </label>
      </Form>
    </Container>
  );
}
StudentAdd.propTypes = {
  // eslint-disable-next-line
  match: PropTypes.object,
};
