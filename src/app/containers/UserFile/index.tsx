/**
 *
 * UserFile
 *
 */

import { Avatar, Col, Row, Space, Tabs, Typography } from 'antd';
import { Container } from 'app/components/Container';
import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

// import { BigButton } from 'app/components/BigButton';
// import { FileDoneOutlined, FileSearchOutlined } from '@ant-design/icons';
import { Consultations } from './consultations';
import { Examination } from './examinations';
import { Histories } from './histories';
import { Hospitalisation } from './hospitalisations';
import { Informations } from './informations';
import { userFileSaga } from './saga';
import { selectUserFile } from './selectors';
import { reducer, sliceKey } from './slice';

const { Title } = Typography;
const { TabPane } = Tabs;

interface Props {}

export const UserFile = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: userFileSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const userFile = useSelector(selectUserFile);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>UserFile</title>
        <meta name="description" content="Description of UserFile" />
      </Helmet>
      <Container>
        <Row justify="space-between" align="middle">
          <Col>
            <Title level={4}>Moussa Diop</Title>
          </Col>
          <Col>
            <Space size="middle">
              <Typography.Text type="secondary">
                Médécin traitant :
              </Typography.Text>
              <Avatar
                src={
                  'https://source.unsplash.com/collection/1831207/120x120?seed=12'
                }
                size={32}
              />
              <a href="##">Dr. Hadley Delea</a>
            </Space>
          </Col>
        </Row>

        <StyledTabs defaultActiveKey="informations" animated={false}>
          <TabPane tab="Informations générales" key="informations">
            <Informations />
          </TabPane>
          <TabPane tab="Antécédents" key="history">
            <Histories />
          </TabPane>
          <TabPane tab="Examens" key="examens">
            <Examination />
          </TabPane>
          <TabPane tab="Consultations" key="consultations">
            <Consultations />
          </TabPane>
          <TabPane tab="Hospitalisations" key="hospitalisations">
            <Hospitalisation />
          </TabPane>
        </StyledTabs>
      </Container>
    </>
  );
});

// const Div = styled.div``;
const StyledTabs = styled(Tabs)`
  margin-top: 40px;
`;
