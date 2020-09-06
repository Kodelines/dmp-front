/**
 *
 * AppHeader
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import {
  Space,
  Badge,
  Avatar,
  Layout,
  Dropdown,
  Menu,
  Typography,
  Button,
} from 'antd';
import {
  CaretDownOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { IconBell } from '../customIcons';
import { Container } from '../Container';

const { Header } = Layout;
const { Text } = Typography;

interface Props {}

export const AppHeader = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const menu = (
    <Menu>
      <Menu.Item icon={<UserOutlined />}>
        <a href="/profile">Mon compte</a>
      </Menu.Item>
      <Menu.Item icon={<SettingOutlined />}>
        <a href="/parameters">Paramètres</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Button icon={<LogoutOutlined />} type="primary">
          Déconnexion
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <MainHeader>
      <Container align="flex-end">
        <Space size="large" align="center" direction="horizontal">
          <Badge count={5}>
            <IconBell />
          </Badge>
          <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
            <div>
              <Space size="small">
                <Avatar src="https://randomuser.me/api/portraits/men/91.jpg" />
                <Text strong>Dr. Mbaye</Text>
                <CaretDownOutlined />
              </Space>
            </div>
          </Dropdown>
        </Space>
      </Container>
    </MainHeader>
  );
});

const MainHeader = styled(Header)`
  padding: 0px;
  border-bottom: solid 1px #ededf4;
`;
