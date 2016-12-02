import { put } from 'redux-saga/effects'

// triggers an initial user-load when the app starts
// the saga ends immediately
const factory = (opts = {}) => {

  function *initialLoad() {
    yield put({
      type:'USER_STATUS_REQUESTED'
    })
  }

  return initialLoad
}

export default factory