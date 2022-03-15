import { addCard, deleteCard } from ".";
import { AppDispatch, RootState } from "../../store";
// import {
//   decrementCounterValue,
//   incrementCounterValue,
// } from "./card.helpers";

// an action
export const updateCard =
  (type: string) =>
  async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
    try {
      const store = getState();

      if (type === "add") {
        dispatch(addCard());
      }
      if (type === "delete") {
        dispatch(deleteCard());
      }
    } catch (error) {
      console.error("Error: updateCounterValue() -", error);
    }
  };
