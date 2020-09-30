/**
 *
 * NewConsultation
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectNewConsultation } from './selectors';
import { newConsultationSaga } from './saga';
import { Container } from 'app/components/Container';
import { Button, Col, Descriptions, Divider, PageHeader, Row } from 'antd';
import { AutoFields, AutoForm, SubmitField } from 'uniforms-antd';
import schema from './schema';

interface Props {}

export const NewConsultation = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: newConsultationSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const newConsultation = useSelector(selectNewConsultation);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Nouvelle consultation</title>
        <meta name="description" content="Description of NewConsultation" />
      </Helmet>
      <Container>
        <PageHeader
          onBack={() => window.history.back()}
          title="Moussa Diop"
          subTitle="Nouvelle consultation"
          // extra={[
          //   <Button key="2" type="primary">
          //     <EditFilled /> Modifier
          //   </Button>,
          //   <Button key="1" danger type="primary">
          //     <DeleteFilled />
          //   </Button>,
          // ]}
        >
          <Descriptions bordered column={{ xs: 1, md: 2 }}>
            <Descriptions.Item label="Etablissement">
              Clinique Dupont - Dumas
            </Descriptions.Item>
            <Descriptions.Item label="Médécin">
              Mathéo Renaud III
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
        <Divider />
        <h2>Nouvelle conusltation</h2>
        <AutoForm schema={schema}>
          <Row>
            <Col span={24}>
              <AutoFields
                fields={[
                  'motif_consultation',
                  'histoire_maladie',
                  'diagnostic',
                ]}
              />
            </Col>
          </Row>
          <Row justify="end">
            <Col span={5}>
              <SubmitField block value="Enregistrer" />
            </Col>
          </Row>
        </AutoForm>
      </Container>
    </>
  );
});

// const Div = styled.div``;
