import React from 'react';

import logoImg from '../../assets/logo.png';

import Card from '../../components/Card';

import { Container, Header, Search, Cards } from './styles';

const home: React.FC = () => {
  return (
    <Container>
      <Header>
        <img className="logo" src={logoImg} alt="Lugares" />
      </Header>
      <Search>
        <form>
          <label htmlFor="country">
            <span>País</span>
            <select id="country">
              <option value="0">Selecione...</option>
            </select>
          </label>

          <label htmlFor="location">
            <span>Local</span>
            <input
              id="location"
              placeholder="Digite o local que deseja conhecer"
            />
          </label>

          <label htmlFor="goal">
            <span>Meta</span>
            <input id="goal" placeholder="mês/ano" />
          </label>

          <button type="submit">Adicionar</button>
        </form>
      </Search>
      <Cards>
        <Card
          country="Brasil"
          location="Balneario Camboriu"
          goal="04/2022"
          flag="https://restcountries.eu/data/bra.svg"
        />
        <Card
          country="Brasil"
          location="Balneario Camboriu"
          goal="04/2022"
          flag="https://restcountries.eu/data/bra.svg"
        />
        <Card
          country="Brasil"
          location="Balneario Camboriu"
          goal="04/2022"
          flag="https://restcountries.eu/data/bra.svg"
        />
        <Card
          country="Brasil"
          location="Balneario Camboriu"
          goal="04/2022"
          flag="https://restcountries.eu/data/bra.svg"
        />
        <Card
          country="Brasil"
          location="Balneario Camboriu"
          goal="04/2022"
          flag="https://restcountries.eu/data/bra.svg"
        />
        <Card
          country="Brasil"
          location="Balneario Camboriu"
          goal="04/2022"
          flag="https://restcountries.eu/data/bra.svg"
        />
        <Card
          country="Brasil"
          location="Balneario Camboriu"
          goal="04/2022"
          flag="https://restcountries.eu/data/bra.svg"
        />
        <Card
          country="Brasil"
          location="Balneario Camboriu"
          goal="04/2022"
          flag="https://restcountries.eu/data/bra.svg"
        />
        <Card
          country="Brasil"
          location="Balneario Camboriu"
          goal="04/2022"
          flag="https://restcountries.eu/data/bra.svg"
        />
        <Card
          country="Brasil"
          location="Balneario Camboriu"
          goal="04/2022"
          flag="https://restcountries.eu/data/bra.svg"
        />
      </Cards>
    </Container>
  );
};

export default home;
