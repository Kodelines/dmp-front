/**
 *
 * Dashboard
 *
 */

import React, { memo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectDashboard } from './selectors';
import { dashboardSaga } from './saga';
import { Container } from 'app/components/Container';

import { Typography, Row, Col, Divider, Button, Space } from 'antd';
import {
  IconAddressBook,
  IconCertificate,
  IconDateTime,
  IconBill,
  IconPulse,
} from 'app/components/customIcons';
import colors from 'styles/colors';
import Alert from '../../components/Alert/index';
import { BigButton } from '../../components/BigButton/index';

const { Title, Text } = Typography;

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

  const today = dayjs().locale('fr').format('dddd LL').toUpperCase();

  const [notifPinned, setnotifPinned] = useState(false);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Description of Dashboard" />
      </Helmet>
      <MainContent>
        <Row>
          <Col>
            <Title level={4}>
              Bonjour James,
              <br />
              Bienvenue sur votre tableau de bord {`{EnterpriseName}`}
            </Title>
          </Col>
        </Row>
        <Row>
          <Col flex="auto">
            <Text disabled>{today}</Text>
          </Col>
          <Col>Votre solde d'absence est de 15 jours</Col>
        </Row>
        <Divider />
        <Row gutter={20}>
          <Col span={12}>
            <Alert
              icon={<IconCertificate />}
              color={colors.primary}
              pinned={notifPinned}
              onPinClicked={pinned => setnotifPinned(pinned)}
            >
              <p>Vous avez des demandes de formations en cours</p>
              <Space>
                <Button type="primary" size="small">
                  Voir
                </Button>
                <Button type="default" size="small">
                  Plus tard
                </Button>
              </Space>
            </Alert>
            <Alert
              icon={<IconDateTime />}
              color={colors.warning}
              pinned={false}
              onPinClicked={pinned => console.log('onPinClicked : ', pinned)}
            >
              <p>Votre demande d'absence a évolué</p>
              <Space>
                <Button type="primary" size="small">
                  Voir
                </Button>
                <Button type="default" size="small">
                  Plus tard
                </Button>
              </Space>
            </Alert>
            <Alert
              icon={<IconAddressBook />}
              color={colors.primary}
              pinned={false}
              onPinClicked={pinned => console.log('onPinClicked : ', pinned)}
            >
              <p>Vous avez une nouvelle collaboratrice</p>
              <Space>
                <Button type="primary" size="small">
                  Voir
                </Button>
                <Button type="default" size="small">
                  Plus tard
                </Button>
              </Space>
            </Alert>
          </Col>
          <Col span={12}>
            <Row gutter={[20, 20]}>
              <Col span={12}>
                <BigButton
                  icon={<IconPulse />}
                  type="primary"
                  href="/activity/new"
                >
                  Ajouter une activité
                </BigButton>
              </Col>
              <Col span={12}>
                <BigButton
                  icon={<IconDateTime />}
                  type="primary"
                  href="/leaves/new"
                >
                  + Demande d'abscence
                </BigButton>
              </Col>
              <Col span={12}>
                <BigButton
                  icon={<IconCertificate />}
                  type="primary"
                  href="/training/new"
                >
                  + Demande de formation
                </BigButton>
              </Col>
              <Col span={12}>
                <BigButton
                  icon={<IconBill />}
                  type="primary"
                  href="/expenses/new"
                >
                  Ajouter note de frais
                </BigButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </MainContent>
    </>
  );
});

const MainContent = styled(Container)`
  padding-top: 40px;
`;
