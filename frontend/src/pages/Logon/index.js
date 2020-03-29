import React, { Component } from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg'
import herosImg from '../../assets/heroes.png'

export default class Logon extends Component {
  render() {
    return (
      <div className="logon-container">
        <section className="form">
          <img src={logo} alt="Be The Hero"/>
          <form action="">
            <h1>Faça seu logon</h1>
            <input placeholder="Sua ID"/>
            <button className="button" type="submit">Entrar</button>

            <a className="back-link" href="/register">
              <FiLogIn size={16} color="#E02041" />
              Não tenho cadastro
            </a>
          </form>
        </section>
        <img src={herosImg} alt="Heroes"/>
      </div>
    );
  }
}
