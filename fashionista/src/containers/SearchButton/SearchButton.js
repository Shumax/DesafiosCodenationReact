import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCancealment, listProducts } from '../../actions';
import SearchedCards from '../../components/SearchedCards';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import './Search.scss';
import { Link } from "react-router-dom";

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
            <FontAwesomeIcon className="search__back--button" icon={faArrowLeft}
                onClick={() => dispatch(handleCancealment())}
            />
						<strong className="search__title--text">Buscar Produtos</strong>
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
					<div className="search__content">
						{!searchedProducts.length ? (
							<strong>Nenhum produto encontrado!</strong>
						):(
							searchedProducts?.map((cards)=>(
								<Link to={`products/${cards.id}`}>
								<SearchedCards key={cards.id} card={cards} />
								</Link>
							))
							
						)}
					</div>
					

          
        </div>
      </div>      
  );
};

export default SearchButton;