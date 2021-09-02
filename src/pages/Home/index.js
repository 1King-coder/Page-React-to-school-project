import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaSignOutAlt, FaSignInAlt, FaFileAlt } from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { IconsContainer } from './styled';

export default function Home() {
  const user = useSelector((state) => state.auth.user);

  function isLoggedIn() {
    if (user) {
      return (
        <>
          <h1>Olá, {user.name}!</h1>
          <IconsContainer>
            <div>
              <Link to="/add-student">
                <span className="icon">
                  <FaFileAlt size={50} />
                </span>
                <span>
                  Responder <br />
                  perguntas
                </span>
              </Link>
            </div>
            <div>
              <Link to="/logout">
                <span className="icon">
                  <FaSignOutAlt size={50} />
                </span>
                <span>Sair</span>
              </Link>
            </div>
          </IconsContainer>
        </>
      );
    }
    return (
      <>
        <h1>Olá, {user.name}!</h1>
        <IconsContainer>
          <div>
            <Link>
              <FaFileAlt size={50} />
            </Link>
          </div>
          <div>
            <Link>
              <FaSignInAlt size={50} />
            </Link>
          </div>
        </IconsContainer>
      </>
    );
  }

  return <Container>{isLoggedIn()}</Container>;
}
