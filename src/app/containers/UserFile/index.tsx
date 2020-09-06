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
import {
  historySchema,
  consultationSchema,
  hospitalizationSchema,
  examenSchema,
} from './schemas';

const { Title } = Typography;
const { TabPane } = Tabs;
const { Panel } = Collapse;

interface Props {}

const historyData = [
  {
    title: 'Antécédent #2345',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Antécédent #5533',
    description: 'Aenean lacinia bibendum nulla sed consectetur.',
  },
  {
    title: 'Nullam id dolor id nibh ultricies',
    description:
      'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
  },
  {
    title: 'Maecenas faucibus mollis interdum.',
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
  const [displayConsultation, setDisplayConsultation] = useState(false);
  const [displayHospitalisation, setdisplayHospitalisation] = useState(false);
  const [displayExam, setDisplayExam] = useState(false);

  return (
    <>
      <Helmet>
        <title>UserFile</title>
        <meta name="description" content="Description of UserFile" />
      </Helmet>
      <Container>
        <Title level={4}>John Doe</Title>

        <Descriptions bordered column={{ xs: 12 }}>
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

        <StyledTabs defaultActiveKey="history">
          <TabPane tab="Antécédents" key="history">
            <Row justify="end">
              <Button type="primary" onClick={() => setdisplayHistory(true)}>
                Ajouter un antécédent
              </Button>
            </Row>
            <StyledCollapse accordion defaultActiveKey={['1', '2', '3', '4']}>
              <Panel header="Antécédent familial" key="1">
                <List
                  itemLayout="horizontal"
                  dataSource={historyData}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        title={item.title}
                        description={item.description}
                      />
                    </List.Item>
                  )}
                />
              </Panel>
              <Panel header="Antécédent chirurgical" key="2">
                <List
                  itemLayout="horizontal"
                  dataSource={historyData}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        title={item.title}
                        description={item.description}
                      />
                    </List.Item>
                  )}
                />
              </Panel>
              <Panel header="Antécédent medical" key="3">
                <List
                  itemLayout="horizontal"
                  dataSource={historyData}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        title={item.title}
                        description={item.description}
                      />
                    </List.Item>
                  )}
                />
              </Panel>
              <Panel header="Mode de vie" key="4">
                <List
                  itemLayout="horizontal"
                  dataSource={historyData}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        title={item.title}
                        description={item.description}
                      />
                    </List.Item>
                  )}
                />
              </Panel>
            </StyledCollapse>
          </TabPane>
          <TabPane tab="Consultations" key="consultations">
            Consultations
          </TabPane>
          <TabPane tab="Hospitalisations" key="hospitalisations">
            Hospitalisations
          </TabPane>
          <TabPane tab="Examens" key="examens">
            Examens
          </TabPane>
        </StyledTabs>

        {/* <Row>
          <Col span={6}>
            <BigButton
              type="primary"
              icon={<FileDoneOutlined />}
              onClick={() => setdisplayHistory(true)}
            >
              Ajouter un antécédent
            </BigButton>
          </Col>
          <Col span={6}>
            <BigButton
              type="primary"
              icon={<FileSearchOutlined />}
              onClick={() => setDisplayConsultation(true)}
            >
              Ajouter une consultation
            </BigButton>
          </Col>
          <Col span={6}>
            <BigButton
              type="primary"
              icon={<FileSearchOutlined />}
              onClick={() => setdisplayHospitalisation(true)}
            >
              Ajouter une hospitalisation
            </BigButton>
          </Col>
          <Col span={6}>
            <BigButton
              type="primary"
              icon={<FileSearchOutlined />}
              onClick={() => setDisplayExam(true)}
            >
              Ajouter un examen
            </BigButton>
          </Col>
        </Row> */}

        <Modal
          title="Ajouter un antécédent"
          visible={displayHistory}
          width="640px"
          centered
          onCancel={() => setdisplayHistory(false)}
        >
          <AutoForm schema={historySchema} />
        </Modal>

        <Modal
          title="Ajouter une consultation"
          visible={displayConsultation}
          width="640px"
          centered
          onCancel={() => setDisplayConsultation(false)}
        >
          <AutoForm schema={consultationSchema} />
        </Modal>

        <Modal
          title="Ajouter une hospitalisation"
          visible={displayHospitalisation}
          width="640px"
          centered
          onCancel={() => setdisplayHospitalisation(false)}
        >
          <AutoForm schema={hospitalizationSchema} />
        </Modal>

        <Modal
          title="Ajouter un examen"
          visible={displayExam}
          width="640px"
          centered
          onCancel={() => setDisplayExam(false)}
        >
          <AutoForm schema={examenSchema} />
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
  margin-top: 40px;
`;
