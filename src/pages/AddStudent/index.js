import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';

export default function StudentAdd() {
  const [fullname, setFullname] = useState([]);
  const [age, setAge] = useState([]);
  const [grade, setGrade] = useState([]);
  const [status, setStatus] = useState([]);
  const [genre, setGenre] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line
  async function storeStudent(data) {
    try {
      setIsLoading(true);
      await axios.post(`/students`, data);

      return setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error('Estudante já existente.');
      return setIsLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!fullname || !age || !grade || !status || !genre) {
        return toast.error('Nenhum campo pode ficar vazio');
      }

      if (fullname.length < 3 || fullname.length > 255) {
        return toast.error(
          'O nome inserido tem que ter entre 3 e 255 caracteres.'
        );
      }

      setIsLoading(true);
      const data = {
        fullname,
        age,
        grade,
        status,
        genre,
      };

      await storeStudent(data);

      setIsLoading(false);

      toast.success('Estudante criado com sucesso.');
      history.push('/answer-questions');
      return setIsLoading(false);
    } catch (error) {
      return toast.error('Não foi possível estabelecer comunicação com a API.');
    }
  }

  return (
    <Container>
      <h1>Entre com seus dados {genre}</h1>
      <Loading isLoading={isLoading} />

      <Form onSubmit={handleSubmit}>
        <label htmlFor="fullname">
          Digite seu nome completo ou seu primeiro nome:
          <input
            type="text"
            value={fullname}
            name="fullname"
            onChange={(e) => setFullname(e.target.value)}
          />
        </label>
        <label htmlFor="age">
          Digite sua idade:
          <input
            type="number"
            value={age}
            name="age"
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </label>
        <label htmlFor="grade">
          Escolha sua turma:
          <select value={grade} onChange={(e) => setGrade(e.target.value)}>
            <option value=""> </option>
            <option value="1º ano do ensino medio">
              1º ano do ensino medio
            </option>
            <option value="2º ano do ensino medio">
              2º ano do ensino medio
            </option>
            <option value="3º ano do ensino medio">
              3º ano do ensino medio
            </option>
          </select>
        </label>
        <label htmlFor="status">
          Escolha seu estado:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value=""> </option>
            <option value="presencial">Presencial</option>
            <option value="online">Online</option>
          </select>
        </label>
        <label htmlFor="status">
          Indique seu gênero:
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value=""> </option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outros">Outros</option>
          </select>
        </label>
        <button type="submit">Próximo</button>
      </Form>
    </Container>
  );
}
