import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Layout,
  Menu,
  Space,
  Typography,
} from 'antd';
/**
 *
 * AppHeader
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

import {
  CaretDownOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { Container } from '../Container';
import { IconBell } from '../customIcons';
import authService from 'services/auth.service';

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

      <Menu.Divider />
      <Menu.Item>
        <Button
          type="primary"
          icon={<LogoutOutlined />}
          onClick={authService.logout}
        >
          Me déconnecter
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <MainHeader>
      <Container align="flex-end" noPadding>
        <Space size="large" align="center" direction="horizontal">
          <a href="/profile">
            <Badge count={5}>
              <IconBell />
            </Badge>
          </a>

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
