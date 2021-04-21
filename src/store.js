import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "../src/components/redux/reducer/DataSlice"
const store = configureStore({ reducer: { data: DataSlice } });
export default store;