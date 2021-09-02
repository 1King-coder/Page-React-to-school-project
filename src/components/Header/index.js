import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt, FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <>
      <Nav>
        <Link to="/students">
          <FaHome size={24} />
        </Link>
        <Link to="/register">
          <FaUserAlt size={24} />
        </Link>
        <Link to="/answer-questions">
          <FaFileAlt size={24} />
        </Link>
        <Link to="/login">
          <FaSignInAlt size={24} />
        </Link>
      </Nav>
    </>
  );
}
