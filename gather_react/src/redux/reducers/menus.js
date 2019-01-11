import { actionTypes } from "../actions";

const initialState = {
  data: []
};
export default (state = initialState, { payload, type }) => {
  switch (type) {
    case actionTypes.FETCH_MENUS_SUCCESS:
      return {
        ...state,
        data: payload
      };
    default:
      return state;
  }
};
