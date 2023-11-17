

import { Breadcrumb as AntdBreadcrumb } from "antd";

import { useMatches, Link } from "react-router-dom";
import menuList from "@/Route/menu";

interface BreadcrumbItem {
  path?: string;
  title?: React.ReactNode;
}

// 从 matches 获取面包屑
function matchBreadCrumbs(matches: ReturnType<typeof useMatches>) {
  const items: BreadcrumbItem[] = [];
  let curMenu = menuList;
  matches.forEach(({ pathname }) => {
    curMenu.some((m) => {
      if (m.key === pathname) {
        curMenu = m.children || [];
        items.push({
          path: m.key,
          title: m.label,
        });
        return true
      } return false
    })
  });

  return items;
}

function itemRender<T>(item: BreadcrumbItem, params: T, items: BreadcrumbItem[]) {
  const last = items.indexOf(item) === items.length - 1;
  return last ? <span>{item.title}</span> : <Link to={item.path!}>{item.title}</Link>;
}

export default function Breadcrumb() {
  const matches = useMatches();
  return <AntdBreadcrumb itemRender={itemRender} items={matchBreadCrumbs(matches)} />;
}
