import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaWindowClose } from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { StudentContainer } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';

export default function Students() {
  const [students, setStudent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/students');

      setStudent(response.data);

      setIsLoading(false);
    }
    getData();
  }, []);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Students</h1>
      <StudentContainer>
        {students.map((student) => (
          <div key={student.id}>
            <span>
              <FaUserCircle size={34} />
            </span>

            <span>{student.fullname}</span>
            <span>{student.age}</span>
            <span>{student.grade}</span>
            <span>{student.status}</span>

            <Link to={`/student/${student.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </StudentContainer>
    </Container>
  );
}
