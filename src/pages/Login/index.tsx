import './index.less'

import LoginForm from './LoginForm'
import LoginBg from './Bg'

function Login() {
  return (
    <div className="login-page">
      {/* 左侧背景 */}
      <div className="login-bg">
        <LoginBg />
      </div>
      {/* 右侧登录 */}
      <div className="login-from-box">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login