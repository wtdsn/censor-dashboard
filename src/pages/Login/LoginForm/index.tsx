import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './index.less'
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function LoginForm() {
  const navi = useNavigate()

  function handleLogin() {
    console.log("login");
    navi('/')
  }

  return (
    <div className='login-from-con'>
      {/* title */}
      <div className='login-title'>
        <svg className='svg_title'>
          <text className='text'>
            Login
            <animate attributeName="stroke-dashoffset" values="150;0" dur="4s" repeatCount="indefinite" />
          </text>
        </svg>
      </div>

      {/* form */}
      <div className='login-form'>
        <Form
          name="loginForm"
          autoComplete="off"
          size="large"
        >
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button type="primary" onClick={handleLogin} style={{ width: '100%' }}>
              Login in
            </Button>
          </Form.Item>
        </Form>

      </div>
    </div>
  )
}