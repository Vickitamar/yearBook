import { put, takeEvery } from "redux-saga/effects";
import { LOAD_BOOKS, loadBooksSuccess, loadBooksFailed } from "../Actions";

function* loadBooks() {
  console.log("test");

  try {
    const books = yield fetch("http://127.0.0.1:4000/books").then(res =>
      res.json()
    );

    yield put(loadBooksSuccess(books));
  } catch (error) {
    const errorMessage = `Failed to load reading list - ${error}`;
    yield put(loadBooksFailed(errorMessage));
  }
}

export default function* bookSaga() {
  yield takeEvery(LOAD_BOOKS, loadBooks);
}
