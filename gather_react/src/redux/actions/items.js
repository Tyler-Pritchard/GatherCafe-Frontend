import { actionTypes } from "/";

export const fetchItems = () => {
  return async dispatch => {
    try {
      const itemsJSON = await fetch("http://localhost:5000/items");
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
