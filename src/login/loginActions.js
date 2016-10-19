import {ACTIONS} from './constants'
import {userLogins} from './loginData.json'

const requestSubmitLogin = (user) =>{
  return {
    type:ACTIONS.SUBMIT_LOGIN,
    user
  }
}
const loginSuccess = (user) =>{
  return {
    type:ACTIONS.LOGIN_SUCCESS,
    user
  }
}
const loginFailure = (user) =>{
  return {
    type:ACTIONS.LOGIN_FAILURE,
    user
  }
}
const requestResetLogin = (user) =>{
  return {
    type:ACTIONS.RESET_LOGIN,
    user
  }
}

export function submitLogin(formData,dispatch){

  console.log('in submit : ' + JSON.stringify(formData))
  for(var user of userLogins) {
    if(user.username == formData.username && user.password == formData.password) {
      dispatch(loginSuccess(user))
    }
  }
  dispatch(loginFailure(formData))
}

export function resetLogin(formData,dispatch){
  dispatch(requestResetLogin({username:'',password:''}))
}
