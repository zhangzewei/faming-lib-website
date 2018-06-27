import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

const menuTitle = {
  LibMenu: '实验室概况',
  ScientificMenu: '科研平台',
  NewsMenu: '新闻资讯',
  PeopleMenu: '人才培养',
  CompareMenu: '合作交流',
  PopulationOfscienceMenu: '科普宣传',
  FileMenu: '资料下载',
}

export const renderMenus = (menus, SubMenuTitle) => {
  if (menus && menus.length) {
    const menu = menus.map(menu => (
      <Menu.Item key={menu.name}>
        <Link to={menu.link}>{menu.name}</Link>
      </Menu.Item>
    ));
    return (
      <SubMenu title={<Link to={menus[0].link}>{menuTitle[SubMenuTitle] || '二级菜单'}</Link>}>
        {menu}
      </SubMenu>
    );
  }
  return null;
};

export const renderMenuWithoutSubMenu = menus => {
  if (menus && menus.length) {
    return menus.map(menu => (
      <Menu.Item key={menu.name}>
        <Link to={menu.link}>{menu.name}</Link>
      </Menu.Item>
    ));
  }
  return null;
}