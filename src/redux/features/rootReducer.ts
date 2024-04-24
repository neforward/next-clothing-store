"use client";
import { combineReducers } from "@reduxjs/toolkit";
import clothingReducer from "./ClothingSlice";
import newsReducer from "./NewsInfoSlice";

const rootReducer = combineReducers({
  clothing: clothingReducer,
  news: newsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
