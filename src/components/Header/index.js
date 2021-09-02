import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaSignOutAlt,
  FaAddressBook,
  FaFileAlt,
  FaBookReader,
} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <Nav>
        <Link to="/">
          <FaHome size={24} />
        </Link>
        <Link to="/students">
          <FaBookReader size={24} />
        </Link>
        {user ? (
          <></>
        ) : (
          <Link to="/register">
            <FaAddressBook size={24} />
          </Link>
        )}
        <Link to="/add-student">
          <FaFileAlt size={24} />
        </Link>
        {user ? (
          <Link to="/logout">
            <FaSignOutAlt size={24} />
          </Link>
        ) : (
          <Link to="/login">
            <FaSignInAlt size={24} />
          </Link>
        )}
      </Nav>
    </>
  );
}
