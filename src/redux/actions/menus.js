import {
    actionTypes
} from "/";

export const fetchMenus = () => {
    return async dispatch => {
        try {
            const menusJSON = await fetch("http://gather-cafe-backend.herokuapp.com/menus");
            const menus = await menusJSON.json();

            dispatch({
                type: actionTypes.FETCH_MENUS_SUCCESS,
                payload: menus
            });
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_MENUS_FAILED,
                payload: error.message
            });
        }
    };
};