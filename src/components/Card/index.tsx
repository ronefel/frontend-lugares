import React from 'react';
import { MdEdit, MdClose } from 'react-icons/md';

import { Container } from './styles';

interface CardProps {
  country: string;
  location: string;
  goal: string;
  flag: string;
}

const Card: React.FC<CardProps> = ({ country, location, goal, flag }) => {
  return (
    <Container>
      <div className="header">
        <img src={flag} alt={country} />
        <div className="action">
          <a href="tes">
            <MdEdit />
          </a>
          <a href="tes">
            <MdClose />
          </a>
        </div>
      </div>
      <div className="country">{country.toUpperCase()}</div>
      <div className="location-goal">
        <div>{`Local: ${location}`}</div>
        <div>{`Meta: ${goal}`}</div>
      </div>
    </Container>
  );
};

export default Card;
