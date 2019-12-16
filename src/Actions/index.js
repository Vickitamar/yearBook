export const LOAD_BOOKS = "LOAD_BOOKS,";
export const LOAD_BOOKS_SUCCESS = "LOAD_BOOKS_SUCCESS";
export const LOAD_BOOKS_FAILED = "LOAD_BOOKS_FAILED";

export const loadBooks = () => ({
  type: LOAD_BOOKS
});

export const loadBooksSuccess = books => ({
  type: LOAD_BOOKS_SUCCESS,
  payload: books
});

export const loadBooksFailed = errorMessage => ({
  type: LOAD_BOOKS_FAILED,
  payload: { errorMessage }
});
