

import { Breadcrumb as AntdBreadcrumb } from "antd";

import { useMatches, Link } from "react-router-dom";
import menuList, { MenuItems } from "@/Route/menu";

// 获取 path 到 label 的映射
const path2LabelMap = (() => {
  const map = new Map<string, string>();
  function getPath2LabelMap(list: MenuItems[], basePath = "") {
    list.forEach((item) => {
      map.set(basePath + item.key, item.label);
      if (item.children && item.children.length) {
        getPath2LabelMap(item.children, basePath + item.key);
      }
    });
  }

  getPath2LabelMap(menuList);

  return map;
})();

interface BreadcrumbItem {
  path?: string;
  title?: React.ReactNode;
}

// 从 matches 获取面包屑
function matchBreadCrumbs(matches: ReturnType<typeof useMatches>) {
  const items: BreadcrumbItem[] = [];

  matches.forEach((m) => {
    const title = path2LabelMap.get(m.pathname);
    if (title) {
      items.push({
        title,
        path: m.pathname,
      });
    }
  });

  return items;
}

function itemRender<T>(item: BreadcrumbItem, params: T, items: BreadcrumbItem[], paths: string[]) {
  const last = items.indexOf(item) === items.length - 1;
  return last ? <span>{item.title}</span> : <Link to={paths.join('/')}>{item.title}</Link>;
}

export default function Breadcrumb() {
  const matches = useMatches();
  return <AntdBreadcrumb itemRender={itemRender} items={matchBreadCrumbs(matches)} />;
}
