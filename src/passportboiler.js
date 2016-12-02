/*

  produce settings for a boiler-frontend app that has
  passport auth
  
*/
import React, { Component, PropTypes } from 'react'
import { Route } from 'react-router'

import PassportReducer from './reducer'
import PassportSagas from './sagas'
import PassportAuth from './auth'
import PassportRoutes from './routes'

const DEFAULT_PASSPORT_SETTINGS = {
  loginRoute:'login',
  registerRoute:'register',
  primaryKey:'email',
  includeEmail:true,
  includeUsername:false,
  extraFields:[],
  loginContent:(<div />),
  registerContent:(<div />),
  userFilter:() => true
}

const passportBoiler = (passportSettings = {}) => {

  let settings = {}
  passportSettings = Object.assign({}, DEFAULT_PASSPORT_SETTINGS, passportSettings)

  settings.sagas = (settings.sagas || []).concat(PassportSagas(settings))
  settings.reducers = Object.assign({}, settings.reducers, {
    passport:PassportReducer
  })

  const originalGetRoutes = settings.getRoutes

  settings.getRoutes = (store) => {
    const auth = PassportAuth(store, passportSettings)

    const originalRoutes = originalGetRoutes ? originalGetRoutes(auth) : null
    const passportRoutes = PassportRoutes(passportSettings)

    return (
      <Route>
        {originalRoutes}
        {passportRoutes}
      </Route>
    )
  }

  return settings
}

export default passportBoiler