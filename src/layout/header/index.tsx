import { Layout, Button } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import './index.less'
import { useNavigate } from "react-router-dom";
import Breadcrumb from './Breadcrumb'

const AntdHeader = Layout.Header;

interface Props {
  collapsed: boolean,
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({ collapsed, setCollapsed }: Props) {
  const navi = useNavigate()
  function logout() {
    // 清楚 token
    localStorage.removeItem('token')
    navi('/login')
  }

  function switchProject() {
    navi('/')
  }

  return (
    <AntdHeader className='layout-header-con'>
      <div className='left'>
        {/*  collapse */}
        <Button
          className='collapse-btn'
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined style={{ fontSize: 20 }} /> : <MenuFoldOutlined style={{ fontSize: 20 }} />}
          onClick={() => setCollapsed(!collapsed)}
        />

        {/*  面包屑 */}
        <Breadcrumb />
      </div>

      <div className='right'>
        <div className='project-name'>project-name</div>
        <Button onClick={switchProject} className='switch-project-btn' type="text">切换项目</Button>
        {/* logout */}
        <Button onClick={logout} className='logout-btn' type="text">Logout</Button>
      </div >
    </AntdHeader>
  )
}



export default Header