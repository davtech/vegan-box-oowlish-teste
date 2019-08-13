import React from "react";
import logo from "../assets/images/logo.png"

export default props => (
  <header>
    <div className="container">
      <div className="header__logo">        
          <a href="#inicio" title="Ir para o início">
            <img src={logo} alt="Vegan Box - Seu clube de assinatura preferido" />
          </a>        
      </div>
      <div className="header__container-elements">
        <nav className="header__nav">
          <ul className="header__ul">
            <li><a className="header__a header__a--active" href="#inicio" title="ir para o início">Início</a></li>
            <li><a className="header__a" href="#sobre" title="Saiba mais sobre nosso empreendimento">Sobre</a></li>
            <li><a className="header__a" href="#boxes" title="Confira a lista disponível de Vegan Boxes">Boxes</a></li>
            <li><a className="header__a" href="#precos" title="Umpreço que cabe no seu orçamento">Preços</a></li>
            <li><a className="header__a" href="#precos" title="Confira a lista disponível de Vegan Boxes">Depoimentos</a></li>
          </ul>
        </nav>

        <div className="header__search">
          <input className="header__input" type="text" placeholder="Buscar" />
        </div>

        <div className="header__cta">
          <a href="#compra" className="btn btn--cta">Assinar</a>
        </div>
      </div>
    </div>

  </header>
);
