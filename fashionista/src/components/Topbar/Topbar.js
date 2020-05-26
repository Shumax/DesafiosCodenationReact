import React from 'react';
import logoSvg from '../../assets/img/fashionista.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import './Topbar.css';

const Topbar = () => (
    <div className="Topbar">
          <header className="Topbar__header">
            <div className="container">
              <a href="/" className="header__logo">
                <img src={logoSvg} alt="Logo Fashionista"/>
              </a>
              <ul>
                <li>
                    <a href="/" className="header__search">
                      <FontAwesomeIcon icon={faSearch}/>
                    </a>
                </li>
                <li>
                    <a href="/" className="header__shopping">
                      <FontAwesomeIcon icon={faShoppingBag} />
                    </a>
                </li>
              </ul>
            </div>
          </header>
        </div>
);


export default Topbar;