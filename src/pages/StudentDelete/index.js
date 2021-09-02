import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';

export default function StudentDelete({ match }) {
  const [fullname, setFullname] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line
  async function getStudent() {
    try {
      setIsLoading(true);
      const response = await axios.get(`students/${match.params.id}`);
      const student = response.data;

      setFullname(student.fullname);

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
      await axios.delete(`/students/${match.params.id}`);

      toast.success('Estudante deletado com sucesso.');
      setIsLoading(false);
      return history.push('/students');
    } catch (error) {
      toast.error('Você não está autorizado para realizar esta ação.');
      return setIsLoading(false);
    }
  }

  return (
    <Container onLoad={getStudent}>
      <h1>Deletar estudante</h1>
      <Loading isLoading={isLoading} />

      <Form onSubmit={handleSubmit}>
        <label htmlFor="Sure">
          Tem certeza que deseja deletar {fullname}?
          <input type="button" value="Sim" onClick={handleSubmit} />
        </label>
      </Form>
    </Container>
  );
}
StudentDelete.propTypes = {
  // eslint-disable-next-line
  match: PropTypes.object,
};
