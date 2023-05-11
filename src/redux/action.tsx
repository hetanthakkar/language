import {ADD_TO_CART, SET_LANGUAGE, DELETE_TO_CART} from './constants';

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}

export function deleteItemFromCart(item) {
  return {
    type: DELETE_TO_CART,
    data: item,
  };
}

export const setLanguage = code => {
  return {
    type: SET_LANGUAGE,
    payload: code,
  };
};
