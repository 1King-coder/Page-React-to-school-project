import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyles';
import { Form, QuestionContainer } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';
import Questions from '../../static/questions.json';

export default function AnswerQuestions({ match }) {
  const [isLoading, setIsLoading] = useState(false);

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
    console.log(answers);
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

  return (
    <Container>
      <h1>Responda as perguntas abaixo:</h1>
      <Loading isLoading={isLoading} />
      <Form onSubmit={handleSubmit}>
        <QuestionContainer>
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
