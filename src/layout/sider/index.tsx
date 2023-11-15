import { Layout, Menu } from 'antd';
import Logo from './Logo/logo'

import menuList from '@/Route/menu';
import { useLocation, useNavigate, useMatches } from "react-router-dom";
import { useEffect, useState } from 'react';

const AntdSider = Layout.Sider;

function Sider({ collapsed }: { collapsed: boolean }) {
  const location = useLocation()
  const navi = useNavigate()

  const matches = useMatches()


  useEffect(() => {
    if (location.pathname === '/dashboard' || location.pathname === '/dashboard/') {
      navi('/dashboard/list')
    }
  }, [location.pathname, navi])


  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  useEffect(() => {
    const keys: string[] = []
    let curMenue = menuList
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


  const menuClick = ({ keyPath }: { keyPath: string[] }) => {
    const path = keyPath.reduce((pre, cur) => cur + pre)
    console.log('=========menuClick=========', path)
    navi(path)
  }

  return (
    <AntdSider trigger={null} collapsible collapsed={collapsed}>
      <Logo collapsed={collapsed} />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['/dashboard/list']}
        selectedKeys={selectedKeys}
        items={menuList}
        onClick={menuClick}
      />
    </AntdSider>
  )
}

export default Sider