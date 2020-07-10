import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { handleSearch, handleBag } from '../../actions';

import logoSvg from '../../assets/img/fashionista.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchButton from "../SearchButton";
import BagButton from "../BagButton";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import './Topbar.css';

const Topbar = () => {
  const dispatch = useDispatch();
  const showSearch = useSelector(state => state.buttons.searchButton);
  const showBag = useSelector(state => state.buttons.bagButton);
  return (
    <div className="Topbar">
      <header className="Topbar__header">
        <div className="container">
          <a href="/" className="header__logo">
            <img src={logoSvg} alt="Logo Fashionista"/>
          </a>
          <ul>
            <li>
              <FontAwesomeIcon className="header__search" icon={faSearch}
                onClick={() => dispatch(handleSearch())}
              />
              {showSearch && <SearchButton/>}
            </li>
            
            <li>
              <FontAwesomeIcon className="header__shopping" icon={faShoppingBag}
                onClick={() => dispatch(handleBag())}
              />
              {showBag && <BagButton/>}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Topbar;