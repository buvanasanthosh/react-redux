import React from 'react'
import LoginForm from './LoginForm'
import {submitLogin,resetLogin} from '../loginActions'
import {connect} from 'react-redux'
import {withRouter} from "react-router";

class CreateLogin extends React.Component {
  render() {
    return (
      <div>
        <h3>Login</h3>
        <LoginForm onSubmit={this.props.onSubmitLogin} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const user = state.login.loginForm.get('user');
  return {
    initialValues: user
  }
};
const mapStateToDispatch = (dispatch) => {
  return {
    onSubmitLogin:(formData)=>{
      console.log(formData)
      dispatch(submitLogin(formData,dispatch))
    },
    onResetLogin : (formData)=>{
      dispatch(resetLogin(formData))
    }
  }
};

export default withRouter(connect(mapStateToProps,mapStateToDispatch)(CreateLogin))

