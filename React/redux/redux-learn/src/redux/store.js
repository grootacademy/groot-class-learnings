import { legacy_createStore } from "redux";
import combineReducer from "./reducer/combineReducer";

export default () => legacy_createStore(combineReducer, {})