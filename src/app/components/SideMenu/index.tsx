import { Layout, Menu } from 'antd';
/**
 *
 * SideMenu
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import colors from 'styles/colors';

import { IconAddressBook, IconDashboard, IconPatients } from '../customIcons';

interface Props {}

const { Header, Sider } = Layout;

export const SideMenu = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const location = useLocation().pathname.replace('/', '');

  return (
    <FixedSidebar>
      <SidebarHeader>
        <h2>LOGO</h2>
      </SidebarHeader>
      <MainMenu theme="light" selectedKeys={[location]} mode="inline">
        <Menu.Item key="dashboard" icon={<IconDashboard />}>
          <a href="/dashboard">Dashboard</a>
        </Menu.Item>
        <Menu.Item key="medecin" icon={<IconAddressBook />}>
          <a href="/medecin">Médécins</a>
        </Menu.Item>
        <Menu.Item key="patients" icon={<IconPatients />}>
          <a href="/patients">Patients</a>
        </Menu.Item>
      </MainMenu>
    </FixedSidebar>
  );
});

// const Div = styled.div``;

const FixedSidebar = styled(Sider)`
  overflow: auto;
  height: 100vh;
  /* position: fixed; */
  color: white;
  left: 0;
  flex: 0 0 250px !important;
  max-width: 250px !important;
  min-width: 250px !important;
  width: 250px !important;
`;

const MainMenu = styled(Menu)`
  margin-top: 40px;
`;

const SidebarHeader = styled(Header)`
  background-color: ${colors.secondaryLighter};
  padding: 20px 20px;
  line-height: 1;

  h2 {
    color: white;
  }
`;
