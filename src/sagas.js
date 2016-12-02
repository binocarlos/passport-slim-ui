import Status from './sagas/status'
import InitialLoad from './sagas/initialload'

const factory = (opts = {}) => {

  return [
    Status(opts),
    InitialLoad(opts)
  ]

}

export default factory