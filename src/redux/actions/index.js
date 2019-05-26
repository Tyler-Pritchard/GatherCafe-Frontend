import {
    SIGN_IN,
    SIGN_OUT
} from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const actionTypes = {
    FETCH_ITEMS_SUCCESS: 'FETCH_ITEMS_SUCCESS',
    FETCH_ITEMS_FAILED: 'FETCH_ITEMS_FAILED',
    FETCH_MENUS_SUCCESS: 'FETCH_MENUS_SUCCESS',
    FETCH_MENUS_FAILED: 'FETCH_MENUS_FAILED'
}