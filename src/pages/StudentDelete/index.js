import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';

export default function StudentDelete({ match }) {
  const [name, setName] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line
  async function getStudent() {
    try {
      setIsLoading(true);
      const response = await axios.get(`students/${match.params.id}`);
      const student = response.data;

      setName(student.fullname);

      setIsLoading(false);
      return student;
    } catch (error) {
      toast.error('Estudante não encontrado');
      setIsLoading(false);
    }
  }

  async function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();

    try {
      await axios.delete(`/student/${match.params.id}`);
      return setIsLoading(false);
    } catch (error) {
      toast.error('Estudante não encontrado');

      return setIsLoading(false);
    }
  }

  return (
    <Container onLoad={getStudent}>
      <h1>Login</h1>
      <Loading isLoading={isLoading} />

      <Form onSubmit={handleSubmit}>
        <label htmlFor="Sure">
          Tem certeza que deseja deletar {name}
          <input type="button" value="Yes" onClick={handleSubmit} />
        </label>
      </Form>
    </Container>
  );
}
StudentDelete.propTypes = {
  // eslint-disable-next-line
  match: PropTypes.object,
};
