import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { player } from "./slices/player";

export const store = configureStore({
  reducer: {
    player,
  }
})

export const useAppSelector = useSelector;