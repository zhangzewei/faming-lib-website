import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

export const LibMenu = () => [ // 实验室概况菜单 
  <Menu.Item key="LibMenu:shiyanshi">
    <Link to="/secondPage/news/LibMenu:shiyanshi/shiyanshi">实验室概况</Link>
  </Menu.Item>,
  <Menu.Item key="LibMenu:lingdao">
    <Link to="/secondPage/news/LibMenu:lingdao/lingdao">领导</Link>
  </Menu.Item>,
  <Menu.Item key="LibMenu:tuandui">
    <Link to="/secondPage/news/LibMenu:tuandui/tuandui">团队介绍</Link>
  </Menu.Item>,
  <Menu.Item key="LibMenu:jigou">
    <Link to="/secondPage/news/LibMenu:jigou/jigou">机构设置</Link>
  </Menu.Item>,
  <Menu.Item key="LibMenu:jichujianshe">
    <Link to="/secondPage/news/LibMenu:jichujianshe/jichujianshe">基地建设</Link>
  </Menu.Item>
];

export const ScientificMenu = () => [
  <Menu.Item key="ScientificMenu:yanjiu">
    <Link to="/secondPage/news/ScientificMenu:yanjiu/yanjiu">科学研究</Link>
  </Menu.Item>,
  <Menu.Item key="ScientificMenu:lingyu">
    <Link to="/secondPage/news/ScientificMenu:lingyu/lingyu">研究领域</Link>
  </Menu.Item>,
  <SubMenu key="chengguo" title={<Link to="/secondPage/newsList/ScientificMenu:chengguolunwen/chengguo:lunwen">科研成果</Link>}>
    <Menu.Item key="ScientificMenu:chengguolunwen">
      <Link to="/secondPage/newsList/ScientificMenu:chengguolunwen/chengguo:lunwen">论文</Link>
    </Menu.Item>
    <Menu.Item key="ScientificMenu:chengguozhuanli">
      <Link to="/secondPage/newsList/ScientificMenu:chengguozhuanli/chengguo:zhuanli">专利</Link>
    </Menu.Item>
    <Menu.Item key="ScientificMenu:chengguozhuanzhu">
      <Link to="/secondPage/newsList/ScientificMenu:chengguozhuanzhu/chengguo:zhuanzhu">专著</Link>
    </Menu.Item>
    <Menu.Item key="ScientificMenu:chengguohuojiang">
      <Link to="/secondPage/newsList/ScientificMenu:chengguohuojiang/chengguo:huojiang">获奖</Link>
    </Menu.Item>
    <Menu.Item key="ScientificMenu:chengguoqita">
      <Link to="/secondPage/newsList/ScientificMenu:chengguoqita/chengguo:qita">其他</Link>
    </Menu.Item>
  </SubMenu>,
];

export const NewsMenu = () => [
  <Menu.Item key="NewsMenu:gongzuo">
    <Link to="/secondPage/newsList/NewsMenu:gongzuo/gongzuo">工作动态</Link>
  </Menu.Item>,
  <Menu.Item key="NewsMenu:tonggao">
    <Link to="/secondPage/newsList/NewsMenu:tonggao/tonggao">通知公告</Link>
  </Menu.Item>
];

export const PeopleMenu = () => [
  <Menu.Item key="PeopleMenu:shuoshi">
    <Link to="/secondPage/news/PeopleMenu:shuoshi/shuoshi">硕士招生</Link>
  </Menu.Item>,
  <Menu.Item key="PeopleMenu:daoshi">
    <Link to="/secondPage/news/PeopleMenu:daoshi/daoshi">导师介绍</Link>
  </Menu.Item>
];

export const CompareMenu = () => (
  <Menu.Item key="CompareMenu:jiaoliu">
    <Link to="/secondPage/news/CompareMenu:jiaoliu/jiaoliu">合作企业</Link>
  </Menu.Item>
);

export const PopulationOfscienceMenu = () => (
  <Menu.Item key="PopulationOfscienceMenu:zhuanzai">
    <Link to="/secondPage/news/PopulationOfscienceMenu:zhuanzai/zhuanzai">转载文章</Link>
  </Menu.Item>
);

export const FileMenu = () => [
  <Menu.Item key="FileMenu:wenzhang">
    <Link to="/secondPage/fileList/FileMenu:wenzhang/wenzhang">文章下载</Link>
  </Menu.Item>,
  <Menu.Item key="FileMenu:lunwenxiazai">
    <Link to="/secondPage/fileList/FileMenu:lunwenxiazai/lunwen">论文下载</Link>
  </Menu.Item>
];