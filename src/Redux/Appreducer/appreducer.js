import * as types from "./actionTypes";

const initialState = {
  books: [],
  isLoading: false,
  isError: false,
  cart:[]
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
      return {
        ...state,cart:[...state.cart,payload]
      };
    }

    default: {
      return state;
    }
  }
};
