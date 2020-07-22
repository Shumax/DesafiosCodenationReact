import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCancealment, listProducts } from '../../actions';
import { Link } from 'react-router-dom';
 
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
					<div className="search__content">
						{!searchedProducts.length ? (
							<p>Nenhum produto encontrado!</p>
						):(
							searchedProducts?.map((card)=>(
								<ul>
									<li>
									<figure className="card__poster">
										{!card.image ? (
										<img className="card__pic" src={"https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"} alt="Imagem Indisponível"/>
											):(
													<img className="card__pic" src={card.image} alt="Imagem Produto"/>
											)}
										<div className="card__promo">
											{card.discount_percentage && (
												<b>- {card.discount_percentage}</b>
											)}
										</div>
									</figure>
									<div className="card__description">
										<strong className="card__name">{card.name}</strong>
										<div className="card__pricing">
											{
												card.regular_price !== card.actual_price ? (
													<>
														<span className="card__price"> { card.regular_price } </span>
														<span className="card__price--promo"> { card.actual_price } </span>
													</>
												):(
													<span className="card__price--promo"> {card.regular_price} </span>
												)
											}
										</div>
									</div>

									</li>
									
								</ul>
							))
							
						)}
					</div>
					

          
        </div>
      </div>      
  );
};

export default SearchButton;