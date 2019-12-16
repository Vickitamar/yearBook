import { LOAD_BOOKS, LOAD_BOOKS_SUCCESS, LOAD_BOOKS_FAILED } from "../Actions";

const initialState = {
  error: "",
  books: {},
  isLoading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOOKS: {
      return {
        ...state,
        error: "",
        books: {},
        isLoading: true
      };
    }

    case LOAD_BOOKS_FAILED: {
      return {
        ...state,
        error: action.payload,
        books: {},
        isLoading: false
      };
    }

    case LOAD_BOOKS_SUCCESS: {
      return {
        ...state,
        error: "",
        books: action.payload,
        isLoading: false
      };
    }

    default:
      return state;
  }
}
