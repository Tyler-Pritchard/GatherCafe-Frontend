import {
  actionTypes
} from "/";

export const fetchItems = () => {
  return async dispatch => {
    try {
      const itemsJSON = await fetch("https://gather-cafe-backend.herokuapp.com/items");
      const items = await itemsJSON.json();

      dispatch({
        type: actionTypes.FETCH_ITEMS_SUCCESS,
        payload: items
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_ITEMS_FAILED,
        payload: error.message
      });
    }
  };
};

/**
 * Adds an Item to the Cart in Reducer
 * @param {Object} payload 
 */
export const addItemToCart = payload => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload
  }
}

/**
 * Removes Item from Cart Reducer
 * @param {Object} payload 
 */
export const removeItemInCart = payload => {
  return {
    type: 'REMOVE_ITEM_IN_CART',
    payload
  }
}