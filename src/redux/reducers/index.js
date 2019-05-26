import {
  combineReducers
} from "redux";
import items from "./items";
import menus from "./menus";
import cartReducer from './cart';

export default combineReducers({
  replaceMe: () => 'asdafsd',
  items,
  menus,
  cart: cartReducer
});