# passport-slim-ui

GUI components for [passport-slim](https://github.com/binocarlos/passport-slim)

## install

Install the module to your project:

```
$ npm install passport-slim-ui --save
```

## Components

#### FormTabs

2 tabs that display the `LoginForm` and `RegisterForm` children

 * page - the current page the user is viewing - {login,register}
 * changePage(page) - run when the tab is changed
 * loginForm - a React component for the login
 * registerForm - a React component for the login
 * loginTitle - the title for the login tab (default = 'Login')
 * registerTitle - the title for the login tab (default = 'Register')
 * styles - an object with styles that are used for the tabs
   * wrapper - extra styles for both form wrappers
   * registerwrapper - extra styles just for the register form
   * loginwrapper - extra styles just for the login form

#### LoginForm

A login form that points at a server url:

 * url - the url to submit the login request to (e.g. /auth/v1/login)
 * reducername - where you mounted the passport reducer (default = passport)
 * error - the current error to display
 * loading - are we currently in a loading transition
 * primaryKey - the field to use as the login field {email,username} (default = email)
 * data - the current biro data for the form
 * meta - the current biro meta for the form
 * onUpdate(data, meta) - run when the form data changes
 * onSubmit(data, meta) - run when the form is submitted

#### RegisterForm

A login form that points at a server url:

 * url - the url to submit the login request to (e.g. /auth/v1/register)
 * reducername - where you mounted the passport reducer (default = passport)
 * error - the current error to display
 * loading - are we currently in a loading transition
 * includeEmail - should we ask for the users email address
 * includeUsername - should we ask for the users username
 * fields - extra biro schema fields
 * data - the current biro data for the form
 * meta - the current biro meta for the form
 * onUpdate(data, meta) - run when the form data changes
 * onSubmit(data, meta) - run when the form is submitted

## license

MIT