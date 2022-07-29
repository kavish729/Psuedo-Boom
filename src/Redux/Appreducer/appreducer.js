import { loadData, saveData } from "../utils/LocalData";
import * as types from "./actionTypes";

const initialState = {
  books: [],
  isLoading: false,
  isError: false,
  cart: loadData("carts") || [],
};

export const appReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case types.REQUEST_BOOKS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.SUCCESS_BOOKS: {
      return {
        ...state,
        books: payload,
        isLoading: false,
      };
    }
    case types.FAILURE_BOOKS: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.SUCCESS_CART: {
      const newData = { ...state, cart: [...state.cart, payload] };
       saveData("carts",newData.cart)
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    }

    default: {
      return state;
    }
  }
};
