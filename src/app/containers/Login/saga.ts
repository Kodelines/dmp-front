import { call, put, takeLatest } from 'redux-saga/effects';
// import { actions } from './slice';
import { AnyAction } from '@reduxjs/toolkit';
import { actions } from './slice';
import authService, { TOKEN_KEY, USER_KEY } from 'services/auth.service';
import { history } from 'utils/history';

export function* login({ payload: { id, password } }: AnyAction) {
  try {
    // call network with data
    const { data } = yield call(authService.login, { matricule: id, password });

    // yield success to store
    yield put(actions.loginSuccess);

    console.log('login data : ', data);

    // save data
    localStorage.setItem(TOKEN_KEY, JSON.stringify(data.token));
    localStorage.setItem(USER_KEY, JSON.stringify(data.agent));
    // localStorage.setItem(USER_KEY, JSON.stringify(data.user));

    // redirect to dashboard
    history.push('/dashboard');
  } catch (error) {
    // yield error to store

    console.log('login error : ', error);
    yield put(actions.loginError(''));
  }
}

export function* loginSaga() {
  yield takeLatest(actions.login.type, login);
}
