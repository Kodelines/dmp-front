/**
 *
 * UserFile
 *
 */

import React, { memo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectUserFile } from './selectors';
import { userFileSaga } from './saga';
import { AutoForm } from 'uniforms-antd';
import { Container } from 'app/components/Container';
import {
  Row,
  Typography,
  Modal,
  Descriptions,
  Tabs,
  List,
  Button,
  Collapse,
} from 'antd';
// import { BigButton } from 'app/components/BigButton';
// import { FileDoneOutlined, FileSearchOutlined } from '@ant-design/icons';
import { historySchema } from './schemas';
import { Consultations } from './consultations';
import { Hospitalisation } from './hospitalisations';
import { Examination } from './examinations';

const { Title } = Typography;
const { TabPane } = Tabs;
const { Panel } = Collapse;

interface Props {}

interface HystoryItem {
  description: string;
}

const historyData: Array<HystoryItem> = [
  {
    description:
      'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
  },
  {
    description: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
  },
];

export const UserFile = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: userFileSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const userFile = useSelector(selectUserFile);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const [displayHistory, setdisplayHistory] = useState(false);

  const historyList = (data: Array<HystoryItem>) => (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta description={item.description} />
        </List.Item>
      )}
    />
  );

  return (
    <>
      <Helmet>
        <title>UserFile</title>
        <meta name="description" content="Description of UserFile" />
      </Helmet>
      <Container>
        <Title level={4}>John Doe</Title>

        <Descriptions bordered size="middle" column={{ md: 2, xs: 1 }}>
          <Descriptions.Item label="Addresse">
            20 Avenue du Général de Gaulle 95100
          </Descriptions.Item>
          <Descriptions.Item label="Téléphone">0605919114</Descriptions.Item>
          <Descriptions.Item label="N° d'identité">PPKKO02</Descriptions.Item>
          <Descriptions.Item label="Type de document">
            Passeport
          </Descriptions.Item>
          <Descriptions.Item label="Sexe">Masculin</Descriptions.Item>
          <Descriptions.Item label="Situation matrimoniale">
            Célibataire
          </Descriptions.Item>
        </Descriptions>

        <StyledTabs defaultActiveKey="history" animated={false}>
          <TabPane tab="Antécédents" key="history">
            <Row justify="end">
              <Button type="primary" onClick={() => setdisplayHistory(true)}>
                Ajouter un antécédent
              </Button>
            </Row>
            <StyledCollapse defaultActiveKey={['1', '2']}>
              <Panel header="Antécédent familial" key="1">
                {historyList(historyData)}
              </Panel>
              <Panel header="Antécédent chirurgical" key="2">
                {historyList(historyData)}
              </Panel>
              <Panel header="Antécédent medical" key="3">
                {historyList(historyData)}
              </Panel>
              <Panel header="Mode de vie" key="4">
                {historyList(historyData)}
              </Panel>
            </StyledCollapse>
          </TabPane>
          <TabPane tab="Consultations" key="consultations">
            <Consultations />
          </TabPane>
          <TabPane tab="Hospitalisations" key="hospitalisations">
            <Hospitalisation />
          </TabPane>
          <TabPane tab="Examens" key="examens">
            <Examination />
          </TabPane>
        </StyledTabs>

        <Modal
          title="Ajouter un antécédent"
          visible={displayHistory}
          width="640px"
          centered
          onCancel={() => setdisplayHistory(false)}
        >
          <AutoForm schema={historySchema} />
        </Modal>
      </Container>
    </>
  );
});

// const Div = styled.div``;
const StyledTabs = styled(Tabs)`
  margin-top: 40px;
`;

const StyledCollapse = styled(Collapse)`
  margin-top: 20px;
`;
