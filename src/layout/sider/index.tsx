import { Layout, Menu } from 'antd';
import Logo from './Logo/logo'

import { renderMenuList } from '@/Route/menu';
import { useNavigate, useMatches } from "react-router-dom";
import { useEffect, useState } from 'react';

const AntdSider = Layout.Sider;

function Sider({ collapsed }: { collapsed: boolean }) {
  // const location = useLocation()
  const navi = useNavigate()

  const matches = useMatches()

  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  useEffect(() => {
    const keys: string[] = []
    let curMenue = renderMenuList
    matches.forEach(({ pathname }) => {
      curMenue.some(m => {
        if (m.key === pathname) {
          curMenue = m.children || []
          keys.push(m.key)
          return true
        } return false
      })
    })

    setSelectedKeys(keys)
  }, [matches])


  const menuClick = ({ key }: { key: string }) => {
    console.log('=========menuClick=========', key)
    navi(key)
  }

  return (
    <AntdSider trigger={null} collapsible collapsed={collapsed}>
      <Logo collapsed={collapsed} />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['/']}
        defaultOpenKeys={['/log']}
        selectedKeys={selectedKeys}
        items={renderMenuList}
        onClick={menuClick}
      />
    </AntdSider>
  )
}

export default Sider