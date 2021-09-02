import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';

export default function StudentEdit({ match }) {
  const [fullname, setFullname] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function getStudentData() {
    try {
      const response = await axios.get(`/students/${match.params.id}`);

      return response.data;
    } catch (e) {
      return toast.error(e);
    }
  }

  async function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();

    const student = await getStudentData();

    if (!student) {
      return toast.error('Estudante não encontrado.');
    }

    if (fullname.length <= 0) {
      setFullname(student.fullname);
    }

    if (!age) {
      setAge(student.age);
    }

    if (!grade) {
      setAge(student.grade);
    }

    await axios.put(`/students/${match.params.id}`, {
      fullname,
      age,
      grade,
    });

    return setIsLoading(false);
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Editar estudante</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="fullname">
          Nome completo:
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Nome completo do aluno"
          />
        </label>
        <label htmlFor="Age">
          Idade:
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Idade do aluno"
          />
        </label>
        <label htmlFor="grade">
          Turma:
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            placeholder="Idade do aluno"
          />
        </label>
        <button type="submit">Concluído</button>
      </Form>
    </Container>
  );
}
StudentEdit.propTypes = {
  // eslint-disable-next-line
  match: PropTypes.object,
};
