import { takeLatest } from 'redux-saga'
import { put } from 'redux-saga/effects'
import api from '../api'

const factory = (opts = {}) => {
  
  function *getUserStatus(action) {

    console.log('-------------------------------------------');
    console.log('-------------------------------------------');
    console.log('USER_STATUS_REQUESTED')
    console.log('action')
    console.dir(action)
    console.log('opts')
    console.dir(opts)
    try {
      const user = yield call(api.fetchUser, opts.statusurl)
      yield put({type: 'USER_STATUS_SUCCEEDED', user: user})
    } catch (e) {
      yield put({type: 'USER_STATUS_FAILED', message: e.message})
    }
  }

  function* userStatus() {
    yield takeLatest('USER_STATUS_REQUESTED', getUserStatus)
  }

  return userStatus
}

export default factory