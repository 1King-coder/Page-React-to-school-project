import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form, QuestionContainer } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';
import Questions from '../../static/questions.json';

export default function AnswerQuestions({ match }) {
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  async function verifyIfStudentAlreadyAnswered() {
    try {
      const response = await axios.get(`/questions/${match.params.id}`);

      const student = response.data;

      if (!student) {
        return true;
      }

      if (Number(student.student_id) === Number(match.params.id)) {
        toast.error('Você já respondeu este questionário!');
        return history.push('/');
      }

      return true;
    } catch (error) {
      return toast.error('Ocorreu um erro, contate o desenvolvedor.');
    }
  }

  verifyIfStudentAlreadyAnswered();

  const questions = [
    Questions.Q1,
    Questions.Q2,
    Questions.Q3,
    Questions.Q4,
    Questions.Q5,
    Questions.Q6,
    Questions.Q7,
    Questions.Q8,
    Questions.Q9,
    Questions.Q10,
  ];

  const answers = [];

  async function storeAnswers(data) {
    try {
      setIsLoading(true);
      await axios.post(`/questions`, data);

      return setIsLoading(false);
    } catch (error) {
      toast.error('Estudante já existente.');
      return setIsLoading(false);
    }
  }

  function handleClick(e, index) {
    answers[index] = e.target.value;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      for (let i = 0; i < 10; i += 1) {
        if (!answers[i]) {
          return toast.error('Nenhuma pergunta pode ficar em branco.');
        }
      }

      setIsLoading(true);

      // eslint-disable-next-line
      const student_id = match.params.id;

      const data = {
        student_id: Number(student_id),
        Q1: Number(answers[0]),
        Q2: Number(answers[1]),
        Q3: Number(answers[2]),
        Q4: Number(answers[3]),
        Q5: Number(answers[4]),
        Q6: Number(answers[5]),
        Q7: Number(answers[6]),
        Q8: Number(answers[7]),
        Q9: Number(answers[8]),
        Q10: Number(answers[9]),
      };

      await storeAnswers(data);

      setIsLoading(false);

      toast.success('Obrigado por responder este formulário!');
      history.push('/thanks');
      return setIsLoading(false);
    } catch (error) {
      return toast.error('Não foi possível estabelecer comunicação com a API.');
    }
  }

  if (isLoggedIn) {
    const flagArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <Container>
        <Loading isLoading={isLoading} />
        <h1>Insira as respostas do aluno nas caixas abaixo: </h1>
        <Form onSubmit={handleSubmit}>
          <QuestionContainer isLogged>
            {flagArray.map((question) => (
              <div key={question} className="select-div">
                <label htmlFor={`answer-${question}`}>
                  Resposta para questão {question + 1}
                  <select
                    name={`answer-${question}`}
                    onChange={(e) => handleClick(e, question)}
                  >
                    <option value=""> </option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                  </select>
                </label>
              </div>
            ))}
          </QuestionContainer>
        </Form>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Responda as perguntas abaixo:</h1>
      <Loading isLoading={isLoading} />

      <Form onSubmit={handleSubmit}>
        <QuestionContainer isLogged={false}>
          {questions.map((question, index) => (
            <div key={`Q${index + 1}`}>
              {question.title}
              <label htmlFor={`Q${index}-OP1`} className="radio-btn">
                <input
                  type="radio"
                  value="1"
                  id={`Q${index}-OP1`}
                  name={`Q${index}`}
                  onClick={(e) => handleClick(e, index)}
                />
                {question.op1}
              </label>

              <label htmlFor={`Q${index}-OP2`} className="radio-btn">
                <input
                  type="radio"
                  value="2"
                  id={`Q${index}-OP2`}
                  name={`Q${index}`}
                  onClick={(e) => handleClick(e, index)}
                />
                {question.op2}
              </label>

              <label htmlFor={`Q${index}-OP3`} className="radio-btn">
                <input
                  type="radio"
                  value="3"
                  id={`Q${index}-OP3`}
                  name={`Q${index}`}
                  onClick={(e) => handleClick(e, index)}
                />
                {question.op3}
              </label>
            </div>
          ))}
        </QuestionContainer>
        <button type="submit">Confirmar respostas</button>
      </Form>
    </Container>
  );
}
AnswerQuestions.propTypes = {
  // eslint-disable-next-line
  match: PropTypes.object,
};
