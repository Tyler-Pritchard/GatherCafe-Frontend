import {
  actionTypes
} from "../actions";

const initialState = {
  data: []
};
export default (state = initialState, {
  payload,
  type
}) => {
  switch (type) {
    case actionTypes.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        data: payload.items
      };
    default:
      return state;
  }
};