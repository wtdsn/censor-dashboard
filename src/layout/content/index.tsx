import { Layout } from 'antd';
import { Outlet } from "react-router-dom"
import './index.less'

import Suspense from '@/components/Suspense';

const AntdContent = Layout.Content;

function Content() {
  return (
    <AntdContent className='layout-content-box'>
      <Suspense children={
        <Outlet />
      }></Suspense>
    </AntdContent>
  )
}

export default Content