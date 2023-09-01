import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginPage,
  FormCard,
  ImageElement,
  Label,
  Input,
  CustomDiv,
  CheckBox,
  CheckBoxLabel,
  CustomDiv1,
  LoginButton,
  ErrorMsg,
} from './styledComponent'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  onSubmitSuccess = jwtToken => {
    console.log(jwtToken)
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangePassword = event => {
    console.log(event.target.value)
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    console.log(event.target.value)
    this.setState({username: event.target.value})
  }

  onChangeShowPassword = event => {
    console.log(event.target)
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {
      username,
      password,
      showErrorMsg,
      errorMsg,
      showPassword,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginPage>
        <FormCard onSubmit={this.onSubmit}>
          <CustomDiv>
            <ImageElement
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </CustomDiv>

          <CustomDiv>
            <Label htmlFor="user">USERNAME</Label>
            <Input
              id="user"
              type="text"
              value={username}
              onChange={this.onChangeUsername}
            />
          </CustomDiv>
          <CustomDiv>
            <Label htmlFor="pass">PASSWORD</Label>
            <Input
              id="pass"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={this.onChangePassword}
            />
          </CustomDiv>
          <CustomDiv1>
            <CheckBox
              id="check"
              type="checkbox"
              onChange={this.onChangeShowPassword}
            />
            <CheckBoxLabel htmlFor="check">Show Password</CheckBoxLabel>
          </CustomDiv1>
          <LoginButton type="submit">Login</LoginButton>
          {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </FormCard>
      </LoginPage>
    )
  }
}
export default Login
