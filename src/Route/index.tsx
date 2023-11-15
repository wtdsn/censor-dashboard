import {
  createBrowserRouter
} from "react-router-dom";
import { lazy } from 'react'
import Layout from "@/layout/index";
import Projects from "@/pages/Projects/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Projects />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "list",
        Component: lazy(() => import('@/pages/List/index'))
      },
      {
        path: "error-list",
        Component: lazy(() => import('@/pages/ErrorList/index'))
      },
      {
        path: "behavior-list",
        Component: lazy(() => import('@/pages/BehaviorList/index'))
      },
      {
        path: "performance-list",
        Component: lazy(() => import('@/pages/PerformanceList/index'))
      }, {
        path: "static-resource-list",
        Component: lazy(() => import('@/pages/StaticResourceList/index'))
      }
    ],
  },
  {
    path: "/login",
    Component: lazy(() => import('@/pages/Login/index'))
  },
  {
    path: "*",
    Component: lazy(() => import('@/pages/NotFound/index'))
  }
])

export default router