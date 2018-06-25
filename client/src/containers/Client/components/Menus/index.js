import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

export const renderMenus = menus => {
  if (menus && menus.length) {
    const menu = menus.map(menu => (
      <Menu.Item key={menu.name}>
        <Link to={menu.link}>{menu.name}</Link>
      </Menu.Item>
    ));
    return (
      <SubMenu title={<Link to={menus[0].link}>{menus[0].name}</Link>}>
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