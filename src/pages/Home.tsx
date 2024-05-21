import React, { useState } from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import GameCard from '../components/Card';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Todos', '0', <PieChartOutlined />),
  getItem('Eurogames', '1', <PieChartOutlined />),
  getItem('Ameritrash', '2', <DesktopOutlined />),
  getItem('Fillers', '3', <PieChartOutlined />),
  getItem('Cooperativos', '4', <DesktopOutlined />),
  getItem('Miniaturas', '5', <DesktopOutlined />),
];

const boardGamesList = [
  { id: 1, src: 'https://www.turolgames.com/55797-thickbox_default/alta-tension-reenergizado.jpg', title: 'Alta tensión', desc: 'Eurogames', categoryId: 1 },
  { id: 2, src: 'https://www.turolgames.com/119750-large_default/army-of-the-dead-a-zombicide-game.jpg', title: 'Army of the dead', desc: 'Ameritrash', categoryId: 2 },
  { id: 3, src: 'https://www.turolgames.com/26741-large_default/virus-juego-cartas.jpg', title: 'Virus', desc: 'Fillers', categoryId: 3 },
  { id: 4, src: 'https://www.turolgames.com/27256-large_default/pandemic-juego-mesa.jpg', title: 'Pandemic', desc: 'Cooperativos', categoryId: 4 },
  { id: 5, src: 'https://www.turolgames.com/112552-large_default/all-in-one-aristeia-core-prime-time-bundle-ingles.jpg', title: 'Aristeia', desc: 'Miniaturas', categoryId: 5 },
];

const Home: React.FC = () => {
  const [category, setCategory] = useState<string>('0');
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setCategory(e.key);
  };

  const filteredBoardGames = category === '0'
    ? boardGamesList
    : boardGamesList.filter(game => game.categoryId.toString() === category);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={items} onClick={handleMenuClick} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px', display: 'flex', flexWrap: 'wrap' }}>
          {
            filteredBoardGames.map(({ title, desc, src, id }) => (
              <GameCard title={title} desc={desc} src={src} key={id} alt={desc} />
            ))
          }
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
