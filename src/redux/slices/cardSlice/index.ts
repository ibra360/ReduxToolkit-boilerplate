import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "./card.types";

const initialState: CounterState = {
  cardObject: [{"wah": 69}],
};
export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state) => {
      state.cardObject = [
        ...state.cardObject,
        {
          wah: Math.random() * Math.random() * 100, //awain
        },
      ];
    },
    deleteCard: (state) => {
      state.cardObject = state.cardObject.slice(0, -1);
    },
  },
});

export const { addCard, deleteCard } = cardSlice.actions;

export default cardSlice.reducer;
