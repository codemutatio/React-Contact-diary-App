import {
  call, put, takeEvery, delay, fork, take
} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { firebaseContacts } from './firestore';
import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  POST_CONTACT,
  POST_CONTACT_SUCCESS,
  UPDATE_STORE
} from './actions/types';
import { postContactApi} from './actions/contact';
import { contactPostFailed } from './actions/actionCreator';

export function* fetchContactSaga() {
  yield put({ type: FETCH_CONTACTS_SUCCESS });
}

export function* postContactSaga(action) {
  try {
      yield call(postContactApi, action.payload);
      yield call(delay, 2000);
      yield put({ type: POST_CONTACT_SUCCESS });
  } catch (error) {
      yield put(contactPostFailed(error));
  }
}

function* startListener() {
  const channel = new eventChannel(emiter => {
      const listener = firebaseContacts.on('value', snapshot => {
          emiter({ data: snapshot.val() || {} });
      });

      return () => {
          listener.off();
      };
  });

  while (true) {
      const { data } = yield take(channel);
      yield put({ type: UPDATE_STORE, payload: data });
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_CONTACTS_REQUEST, fetchContactSaga);
  yield takeEvery(POST_CONTACT, postContactSaga);
  yield fork(startListener);
}
