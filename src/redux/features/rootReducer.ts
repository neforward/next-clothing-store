"use client";
import { combineReducers } from "@reduxjs/toolkit";
import clothingReducer from "./ClothingSlice";

const rootReducer = combineReducers({
  clothing: clothingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
