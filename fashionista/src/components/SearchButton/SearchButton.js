import React from "react";
import { useDispatch } from "react-redux";
import { handleCancealment } from '../../actions';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import './Search.scss';

const SearchButton = () => {
  const dispatch = useDispatch();
  return (
      <div className="visible">
        <div className="search">
            <FontAwesomeIcon className="search__back--button" icon={faArrowLeft}
              onClick={()=> dispatch(handleCancealment())}
            />
            <strong className="header__title"> Buscar Produtos</strong>
          
          <div className="search__form">
              <input className="search__input" type="text" placeholder="Pesquise pelo produto" />
        </div>    
      </div>

      </div>
      
      
      

  
      
  );
};

export default SearchButton;