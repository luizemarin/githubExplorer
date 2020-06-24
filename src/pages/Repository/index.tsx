import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Header } from './style';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <Header>
      <img src={logoImage} alt="GitHub Explorer" />
      <Link to="/">
        <FiChevronLeft size={16} />
        Voltar
      </Link>
    </Header>
  );
};

export default Repository;
