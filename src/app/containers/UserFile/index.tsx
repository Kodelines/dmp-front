/**
 *
 * UserFile
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Typography, Tabs } from 'antd';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectUserFile } from './selectors';
import { userFileSaga } from './saga';
import { Container } from 'app/components/Container';
// import { BigButton } from 'app/components/BigButton';
// import { FileDoneOutlined, FileSearchOutlined } from '@ant-design/icons';
import { Consultations } from './consultations';
import { Hospitalisation } from './hospitalisations';
import { Examination } from './examinations';
import { Histories } from './histories';
import { Informations } from './informations';

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
        <Title level={4}>Moussa Diop</Title>

        <StyledTabs defaultActiveKey="informations" animated={false}>
          <TabPane tab="Informations générales" key="informations">
            <Informations />
          </TabPane>
          <TabPane tab="Antécédents" key="history">
            <Histories />
          </TabPane>
          <TabPane tab="Examens généraux" key="examens">
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
