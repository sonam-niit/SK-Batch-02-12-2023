import { createStore } from "redux";
import RootReducer from "./reducrers/rootreducer";

const store= createStore(RootReducer);

export default store;