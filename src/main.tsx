import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from '@/Route/index'

import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

import Suspense from '@/components/Suspense'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // 严格模式
  <React.StrictMode>
    {/* 中文 */}
    <ConfigProvider locale={zhCN}>
      {/* 路由 */}
      <Suspense children={
        <RouterProvider router={router}></RouterProvider>
      }></Suspense>
    </ConfigProvider>
  </React.StrictMode>,
)
