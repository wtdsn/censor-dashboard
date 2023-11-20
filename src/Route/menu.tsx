import FontIcon from "@/components/fontIcon"

export interface MenuItems {
  key: string,
  label: string,
  icon?: React.ReactNode,
  hiden?: boolean,
  children?: MenuItems[]
}

/* 
  key 需要完整的路径，即使是子路由，也需要在所有 key 中唯一
*/
const menuList: MenuItems[] = [
  {
    key: "/",
    label: "团队管理",
    icon: <FontIcon type="icon-xiangmu" />
  },
  {
    key: "/log",
    label: "日志列表",
    icon: <FontIcon type="icon-rizhi" />,
    children: [
      {
        key: "/log/",
        label: "总列表",
        icon: <FontIcon type="icon-list" />
      }, {
        key: "/log/error-log",
        label: "错误日志",
        icon: <FontIcon type="icon-error" />
      }, {
        key: "/log/behavior-list",
        label: "行为日志",
        icon: <FontIcon type="icon-behavior" />
      }, {
        key: "/log/performance-list",
        label: "性能日志",
        icon: <FontIcon type="icon-performance" />
      }, {
        key: "/log/static-resource-list",
        label: "静态资源日志",
        icon: <FontIcon type="icon-resource" />
      },
    ]
  },
  {
    key: "/notice",
    label: "通知管理",
    icon: <FontIcon type="icon-tixing" />
  }]

function getRenderMenuList(menuList: MenuItems[]) {
  return menuList.reduce((res, preItem) => {
    const item = { ...preItem }
    if (item.hiden) return res
    if (item.children) {
      item.children = getRenderMenuList(item.children)
      if (item.children.length === 0) delete item.children
    }
    res.push(item)
    return res
  }, [] as MenuItems[])
}
console.log(getRenderMenuList(menuList));

export const renderMenuList = getRenderMenuList(menuList)


export default menuList