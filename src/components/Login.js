import React from "react";
import WarningBanner from './WarningBanner';
import '../css/Login.css'
import {API_ROOT, HEADERS} from "../constants";
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  
  componentWillMount() {
  }
  
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }
  
  handleLogin(event) {
    event.preventDefault();
    
    let email = this.state.email;
    let pass = this.state.password;
    
    if (!email && !pass) {
      this.setState({message: 'emailとpasswordは必須です'});
    } else if (!email) {
      this.setState({message: 'emailは必須です'});
    } else if (!pass) {
      this.setState({message: 'パセワードは必須です'});
    } else {
      this.setState({message: null});
      let params = {
        email: this.state.email,
        password: this.state.password
      };
      axios({
        url: `${API_ROOT}/auth/sign_in`,
        method: 'POST',
        headers: HEADERS,
        params: params
      })
        .then(responce => {
          localStorage.setItem('user',
            JSON.stringify({
              'access-token': responce.headers['access-token'],
              client: responce.headers['client'],
              uid: responce.headers['uid']
            }));
          this.props.history.push('/timeline');
        })
        .catch(() => {
          this.setState({message: 'メールアドレスまたはパスワードが違います'});
        })
    }
  }
  
  render() {
    const message = this.state.message;
    return (
      localStorage.getItem('user') ?
        <Redirect to={'/timeline'}/> :
        <div id='container'>
          <div className='login_bg'>
            <div className='login'>
              <div className='login_gradation'> </div>
              <div className='login_inner'>
                <div className='login_lead'>Thxにログインする</div>
                {message && <WarningBanner className='login_message' message={this.state.message}/>}
                <form onSubmit={this.handleLogin}>
                  <div className='login_label'>メールアドレス</div>
                  <input className='login_input login_input-primary' name="email" type="email"
                         placeholder="thx@example.com"
                         value={this.state.email} onChange={this.handleChange}/>
                  <div className='login_label'>パスワード</div>
                  <input className='login_input login_input-primary' name="password" type="password"
                         placeholder="パスワード" autoComplete="off"
                         value={this.state.password} onChange={this.handleChange}/>
                  <button className='login_btn' type='submit'>ログイン</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Login
