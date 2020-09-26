/**
 *
 * ExaminationDetails
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectExaminationDetails } from './selectors';
import {
  Button,
  Col,
  Descriptions,
  Divider,
  Image,
  PageHeader,
  Row,
  Space,
} from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { Container } from 'app/components/Container';

const ConfidentialImage = require('assets/images/confidential.jpg');
const SecretImage = require('assets/images/secret.jpg');

interface Props {}

export const ExaminationDetails = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const examinationDetails = useSelector(selectExaminationDetails);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Examination Details</title>
        <meta name="description" content="Description of ExaminationDetails" />
      </Helmet>
      <Container>
        <PageHeader
          onBack={() => window.history.back()}
          title="Moussa Diop"
          subTitle="Détails examen"
          extra={[
            <Button key="2" type="primary">
              <EditFilled /> Modifier
            </Button>,
            <Button key="1" danger type="primary">
              <DeleteFilled />
            </Button>,
          ]}
        >
          <Descriptions bordered column={{ xs: 1, md: 2 }}>
            <Descriptions.Item label="Date">
              Mer. 24 Juin 2020 06:48
            </Descriptions.Item>
            <Descriptions.Item label="Etablissement">
              Laboratoire Dupont - Dumas
            </Descriptions.Item>
            <Descriptions.Item label="Examen">
              Echographie obstétricale
            </Descriptions.Item>
            <Descriptions.Item label="Médécin">
              Mathéo Renaud III
            </Descriptions.Item>
            <Descriptions.Item label="Commentaires" span={2}>
              Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac
              facilisis in.
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
        <Divider />
        <Space direction="vertical">
          <Row>
            <h4>Détails de l'examen</h4>
          </Row>
          <Row>
            <Descriptions bordered column={{ xs: 1, md: 2 }}>
              <Descriptions.Item label="Fonction supérieures">
                Fermentum Sollicitudin Vestibulum
              </Descriptions.Item>
              <Descriptions.Item label="Motricité">
                Ullamcorper Condimentum Pellentesque
              </Descriptions.Item>
              <Descriptions.Item label="Tonicité">
                Bibendum Sit
              </Descriptions.Item>
              <Descriptions.Item label="Reflexes">
                Sollicitudin Purus
              </Descriptions.Item>
              <Descriptions.Item label="Sensibilité">
                Porta Cursus Consectetur
              </Descriptions.Item>
              <Descriptions.Item label="Tropicité">
                Pellentesque Nibh Dapibus
              </Descriptions.Item>
              <Descriptions.Item label="Coordination">
                Commodo Nibh
              </Descriptions.Item>
              <Descriptions.Item label="Nerf cranien">
                Amet Dapibus
              </Descriptions.Item>
            </Descriptions>
          </Row>
          {/* <Document file={pdfDoc}>
            <Page pageNumber={1} />
          </Document> */}
          <Divider />
          <Row>
            <h4>Document(s) joint(s)</h4>
          </Row>
          <Row gutter={16}>
            <Col>
              <Image width={200} src={ConfidentialImage} />
            </Col>
            <Col>
              <Image width={200} src={SecretImage} />
            </Col>
          </Row>
        </Space>
      </Container>
    </>
  );
});

const Div = styled.div``;
