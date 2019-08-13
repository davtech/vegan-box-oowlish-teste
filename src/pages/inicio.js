import React, { Component } from "react";
import Slider from "react-slick";
import Header from "../templates/header";

import logoLight from "../assets/images/logo-light.png"
import bannerSlider1 from "../assets/images/banner-slider-1.jpg"
import bannerSlider2 from "../assets/images/banner-slider-2.jpg"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class DadosPessoais extends Component {

  render(){
    return (
      <>
        <Header />

        <div className="banner">
          <Slider 
            fade={true}
            dots={true}
            arrows={false}
            infinite={true}
          > 
            <div className="banner__container-img" >
              <img className="banner__img-desktop" src={bannerSlider1} alt="Nosso delicioso sanduiche" />
              <img className="banner__img-resp" src="https://via.placeholder.com/800x533?text=Banner-resp-1" alt="Nosso delicioso sanduiche" />
            </div>

            <div className="banner__container-img" >
              <img className="banner__img-desktop" src={bannerSlider2} alt="Nosso delicioso sanduiche" />
              <img className="banner__img-resp" src="https://via.placeholder.com/800x533?text=Banner-resp-2" alt="Nosso delicioso sanduiche" />
            </div>
          </Slider>
        </div>

        <div className="info">

          <div className="slogan">
            <div className="slogan__logo">
              <img src={logoLight} alt="Logo Vegan box" />  
            </div>
            <div className="slogan__text">
              <h2>Seu clube de assinatura <br /><span>Vegano</span></h2>
            </div>
          </div>

          <div className="call-to-action">
            <p>
              Não perca mais tempo <strong>procurando e se deslocando</strong> para
              supermercados para conseguir sua alimentação semanal
              vegana, <strong>nós cuidamos disso pra você</strong>.
            </p>

            <a className="btn btn--cta" href="#comprar" title="Compare e compre">Assine a PARTIR DE R$ 49,90/MÊS</a>
          </div>

        </div>        
      </>
    );
  }
  
}
