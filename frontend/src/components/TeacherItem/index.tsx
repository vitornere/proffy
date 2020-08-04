import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/7717842?s=460&u=07551cb8fc65fe645618694ffb027b82865cf7e5&v=4"
          alt="Vitor Nere"
        />
        <div>
          <strong>Vitor Nere</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Apaixonado por programação
        <br /><br />
        Ensina o que precisar!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
