import React from "react";

export default props => (
  <header>
    <div className="header__logo" />
    <nav className="header__nav">
      <ul>
        <li>
          <a className="header__a--active" href="#inicio" title="ir para o início">
            Início
          </a>
        </li>
        <li>
          <a href="#sobre" title="Saiba mais sobre nosso empreendimento">
            Sobre
          </a>
        </li>
        <li>
          <a href="#inicio" title="ir para o início">
            Sobre
          </a>
        </li>
      </ul>
    </nav>
  </header>
);
