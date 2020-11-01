/**
 *
 * MyNotifications
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectMyNotifications } from './selectors';
import { myNotificationsSaga } from './saga';
import { Container } from 'app/components/Container';
import { Col, Divider, List, PageHeader, Row, Space, Typography } from 'antd';
import Alert from 'app/components/Alert/index';
import { FolderFilled } from '@ant-design/icons';

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
  {
    date: '17 Oct. 2020',
    title: "Nouveau note d'hospitalisation ajoutée",
    patient: 'Abdoulaye Mbaye',
    content: 'Donec id elit non mi porta gravida at eget metus.',
    closed: false,
    level: 'danger',
  },
  {
    date: '17 Oct. 2020',
    title: "Nouveau note d'hospitalisation ajoutée",
    patient: 'Abdoulaye Mbaye',
    content: 'Donec id elit non mi porta gravida at eget metus.',
    closed: false,
    level: 'danger',
  },
  {
    date: '17 Oct. 2020',
    title: "Nouveau note d'hospitalisation ajoutée",
    patient: 'Abdoulaye Mbaye',
    content: 'Donec id elit non mi porta gravida at eget metus.',
    closed: false,
    level: 'danger',
  },
  {
    date: '17 Oct. 2020',
    title: "Nouveau note d'hospitalisation ajoutée",
    patient: 'Abdoulaye Mbaye',
    content: 'Donec id elit non mi porta gravida at eget metus.',
    closed: false,
    level: 'danger',
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

export const MyNotifications = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: myNotificationsSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const myNotifications = useSelector(selectMyNotifications);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>MyNotifications</title>
        <meta name="description" content="Description of MyNotifications" />
      </Helmet>
      <Container>
        <PageHeader
          title="Mes notifications"
          subTitle="Activités sur les dossiers de mes patients"
        />
        <Divider />
        <Col>
          <Space direction="vertical">
            {notifications.length > 0 && (
              <>
                <Row>
                  {notifications.map(not => (
                    <Col span={24}>
                      <Alert level={not.level} icon={<FolderFilled />}>
                        <Typography.Text>{not.title}</Typography.Text>
                        <Typography.Text type="secondary">
                          12/10/2020 à 14h30
                        </Typography.Text>
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
        </Col>
      </Container>
    </>
  );
});
