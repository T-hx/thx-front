import React from "react";
import WarningBanner from './WarningBanner';
import '../css/login.css'
import {API_ROOT, HEADERS} from "../constants";
import { Redirect } from 'react-router-dom'

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
      fetch(`${API_ROOT}/auth/sign_in`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(params)
      })
        .then(res => {
          localStorage.setItem('user',
            JSON.stringify({
              'access-token': res.headers['access-token'],
              client: res.headers.client,
              uid: res.headers.uid
            }));
          this.props.history.push('/');
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
        <Redirect to={'/'}/> :
        <div id='container'>
          <div className='login_bg'>
            <div className='login'>
              <div className='login_gradation'></div>
              <div className='login_inner'>
                <div className='login_lead'>Thxにログインする</div>
                {message && <WarningBanner className='login_message' message={this.state.message}/>}
                <div className='login_label'>メールアドレス</div>
                <input className='login_input login_input-primary' name="email" type="email"
                       placeholder="unipos@example.com"
                       value={this.state.email} onChange={this.handleChange}/>
                <div className='login_label'>パスワード</div>
                <input className='login_input login_input-primary' name="password" type="password" placeholder="パスワード"
                       value={this.state.password} onChange={this.handleChange}/>
                <button className='login_btn' onClick={this.handleLogin}>ログイン</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Login
