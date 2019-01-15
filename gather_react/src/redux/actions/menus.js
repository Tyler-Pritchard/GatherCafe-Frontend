import {
    actionTypes
} from "/";

export const fetchMenus = () => {
    return async dispatch => {
        try {
            const menusJSON = await fetch("http://localhost:5000/menus");
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