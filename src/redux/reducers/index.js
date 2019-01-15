import {
  combineReducers
} from "redux";
import items from "./items";
import menus from "./menus";

export default combineReducers({
  items,
  menus
});