import { useState } from "react";
import { Layout as AntdLayout } from 'antd';


import Sider from "./sider";
import Header from "./header";
import Content from "./content";

function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AntdLayout style={
      { height: '100vh', }
    }>
      <Sider collapsed={collapsed}></Sider>
      <AntdLayout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed}></Header>
        <Content></Content>
      </AntdLayout>
    </AntdLayout >
  )
}

export default Layout