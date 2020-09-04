/**
 *
 * SideMenu
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Menu, Layout } from 'antd';

import { IconDashboard, IconAddressBook, IconDateTime } from '../customIcons';
import colors from 'styles/colors';

interface Props {}

const { Header, Sider } = Layout;

export const SideMenu = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <FixedSidebar>
      <SidebarHeader>
        <h2>LOGO</h2>
      </SidebarHeader>
      <MainMenu theme="light" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<IconDashboard />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<IconAddressBook />}>
          Collaborateurs
        </Menu.Item>
        <Menu.Item key="9" icon={<IconDateTime />}>
          Absences
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
