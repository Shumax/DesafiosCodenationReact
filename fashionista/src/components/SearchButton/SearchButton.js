import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import './Search.scss';

const SearchButton = () => {
    return (
        <div className="visible">
          <div className="search">
              <FontAwesomeIcon className="search__back--button" icon={faArrowLeft}
              />
              <div className="header__title"> Buscar Produtos</div>
            
            <div className="search__form">
                <input className="search__input" type="text" placeholder="Pesquise pelo produto" />
          </div>    
        </div>

        </div>
        
        
        

    
        
    );
};

export default SearchButton;