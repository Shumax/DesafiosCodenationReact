import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCancealment, listProducts } from '../../actions';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import './Search.scss';

const SearchButton = () => {
  const dispatch = useDispatch();
	const nameValue = useSelector(state => state.products.searchName);
	const products = useSelector(state => state.products.products);
	const searchedProducts = useSelector(state => state.products.searchedProducts);
	console.log(searchedProducts);
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
              value={nameValue || ""}
              onChange={(event) => dispatch(listProducts(event, products))}
            />
          </div> 

          
        </div>
      </div>      
  );
};

export default SearchButton;