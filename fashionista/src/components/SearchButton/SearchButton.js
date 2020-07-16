import React from "react";
import { useDispatch } from "react-redux";
import { handleCancealment } from '../../actions';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import './Search.scss';

const SearchButton = () => {
  const dispatch = useDispatch();
  var nameValue = "";
  return (
      <div className="visible">
        <div className="search">
          <div className="search__title"> 
            <ul>
              <li>
                <FontAwesomeIcon className="search__back--button" icon={faArrowLeft}
                onClick={() => dispatch(handleCancealment())}
                />
              </li>
              <li>
                <strong className="search__title--text">Buscar Produtos</strong>
              </li>
            </ul>
          </div>
          
          <div className="search__form">
            <input 
              className="search__input" 
              type="text" 
              placeholder="Pesquise pelo produto" 
              value={nameValue}
              
            />
          </div> 

          
        </div>
      </div>      
  );
};

export default SearchButton;