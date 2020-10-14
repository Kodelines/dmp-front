/**
 *
 * Dashboard
 *
 */

// import dayjs from 'dayjs';
import 'dayjs/locale/fr';

import { Col, Input, Row, Space, Typography } from 'antd';
import { BigButton } from 'app/components/BigButton';
import { Container } from 'app/components/Container';
import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { UserAddOutlined, FileAddFilled } from '@ant-design/icons';

import { dashboardSaga } from './saga';
import { selectDashboard } from './selectors';
import { reducer, sliceKey } from './slice';

// import colors from 'styles/colors';
import Alert from 'app/components/Alert/index';

import { FolderFilled } from '@ant-design/icons';

// const { Title, Text } = Typography;
const { Search } = Input;

type Notification = {
  date: string;
  title: string;
  content: string;
  patient: string;
  closed: boolean;
  pinned?: boolean;
  level?: 'notification' | 'warning' | 'danger';
};

const notifications: Array<Notification> = [
  {
    date: '15 Oct. 2020',
    title: 'Nouveau document ajouté',
    patient: 'Ibrahim Bah',
    content:
      'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
    closed: false,
    level: 'notification',
  },
  {
    date: '17 Oct. 2020',
    title: "Nouveau note d'hospitalisation ajoutée",
    patient: 'Abdoulaye Mbaye',
    content: 'Donec id elit non mi porta gravida at eget metus.',
    closed: false,
    level: 'danger',
  },
];

interface Props {}

export const Dashboard = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: dashboardSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dashboard = useSelector(selectDashboard);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  let history = useHistory();

  const handleClick = () => history.push('/userfile/123456');

  // const today = dayjs().locale('fr').format('dddd LL').toUpperCase();
  // const [notifPinned, setnotifPinned] = useState(false);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Description of Dashboard" />
      </Helmet>
      <Container>
        <SearchBox
          placeholder="Rechercher un dossier"
          onSearch={handleClick}
          enterButton
        />
        <Row justify="start" gutter={16}>
          <Col span={6}>
            <BigButton
              type="primary"
              href="/adduser"
              icon={<UserAddOutlined />}
            >
              Nouveau dossier patient
            </BigButton>
          </Col>
          <Col span={6}>
            <BigButton
              type="primary"
              href="/uploaddoc"
              icon={<FileAddFilled />}
            >
              Ajouter un document à un dossier patient
            </BigButton>
          </Col>
        </Row>
        <Space className="mt-2" direction="vertical">
          {notifications.length > 0 && (
            <>
              <h3>Notifications importantes</h3>
              <Row>
                {notifications.map(not => (
                  <Col span={24}>
                    <Alert level={not.level} icon={<FolderFilled />}>
                      <Typography.Text>{not.title}</Typography.Text>
                      <Typography.Text strong>{not.patient}</Typography.Text>
                      <Typography.Text type="secondary">
                        {not.content}
                      </Typography.Text>
                    </Alert>
                  </Col>
                ))}
              </Row>
            </>
          )}
        </Space>
      </Container>
    </>
  );
});

const SearchBox = styled(Search)`
  margin-bottom: 40px;

  .ant-input-search-button {
    height: 55px;
    font-size: 20px;
  }
`;
