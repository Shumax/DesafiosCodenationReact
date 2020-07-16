import React from "react";
import { useDispatch } from "react-redux";
import { handleCancealment } from '../../actions';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import './Bag.scss';

const BagButton = () => {
    const dispatch = useDispatch();
    return (
        <div className="visible">
            <div className="bag">
                <div className="bag__title">
                    <ul>
                        <li>
                            <FontAwesomeIcon
                            className="bag__back--button"
                            icon={faArrowLeft}
                            onClick={() => { dispatch(handleCancealment()) }}
                            />
                        </li>
                        <li>
                            <strong className="bag__title--text">Sacola</strong>
                        </li>
                    </ul>
                </div>
                
                
            </div>

        </div>
    );
};

export default BagButton;