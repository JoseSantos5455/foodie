import { takeLatest } from "redux-saga/effects";

function* rootSaga() {
  yield takeLatest("get_products", () => console.log("products"));
}

export default rootSaga;
