import {
  combineReducers
} from "redux";
import items from "./items";
import menus from "./menus";
import cartReducer from './cart';

export default combineReducers({
  items,
  menus,
  cart: cartReducer
});