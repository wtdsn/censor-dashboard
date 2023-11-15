import FontIcon from "@/components/fontIcon"

export interface MenuItems {
  key: string,
  label: string,
  icon?: React.ReactNode,
  children?: MenuItems[]
}

const menuList: MenuItems[] = [
  {
    key: "/dashboard/list",
    label: "总列表",
    icon: <FontIcon type="icon-list" />
  }, {
    key: "/dashboard/error-list",
    label: "错误日志",
    icon: <FontIcon type="icon-error" />
  }, {
    key: "/dashboard/behavior-list",
    label: "行为日志",
    icon: <FontIcon type="icon-behavior" />
  }, {
    key: "/dashboard/performance-list",
    label: "性能日志",
    icon: <FontIcon type="icon-performance" />
  }, {
    key: "/dashboard/static-resource-list",
    label: "静态资源日志",
    icon: <FontIcon type="icon-resource" />
  }]


export default menuList