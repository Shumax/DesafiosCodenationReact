import { combineReducers } from 'redux';

import { products } from './products';
import { buttons } from "./buttons";

export default combineReducers({
  products,
  buttons,
});