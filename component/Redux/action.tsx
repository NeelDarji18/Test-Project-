import {ADD_TO_CART} from './Constants';

export function addtocart({item}: any) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}
