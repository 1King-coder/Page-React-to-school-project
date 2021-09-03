import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { IconsContainer } from './styled';

export default function Thanks() {
  return (
    <Container>
      <h1>Obrigado por responder nosso formulário!</h1>
      <IconsContainer>
        <div>
          <Link to="/">
            <span className="icon">
              <FaHome size={50} />
            </span>
            <span>
              Voltar para <br />a Home
            </span>
          </Link>
        </div>
      </IconsContainer>
    </Container>
  );
}
