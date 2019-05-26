import {
  combineReducers
} from "redux";
import items from "./items";
import menus from "./menus";
import cartReducer from './cart';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  items,
  menus,
  cart: cartReducer
});