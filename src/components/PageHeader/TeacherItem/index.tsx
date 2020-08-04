import React from 'react';

import whatsappIcon from '../../../assets/images/icons/whatsapp.svg';
import './styles.css';
function TeacherItem(){
  return(
    <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/30278242?s=460&u=e399bc24801a815b789669ff9ab73fb2edb048e9&v=4" alt="Lucas Antonio"/>
            <div>
              <strong>Diego Fernandes</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/><br/>
            Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências.
          </p>

          <footer>
            <p>
              Preço/hora 
              <strong>R$80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em Contato
            </button>
          </footer>

        </article>
  );
}

export default TeacherItem;