/**
 *
 * NewExamination
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectNewExamination } from './selectors';
import { newExaminationSaga } from './saga';
import { Container } from 'app/components/Container';
import { Col, Descriptions, Divider, PageHeader, Row } from 'antd';
import { AutoForm, AutoFields, SubmitField } from 'uniforms-antd';
import schema from './schema';

interface Props {}

export const NewExamination = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: newExaminationSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const newExamination = useSelector(selectNewExamination);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>NewExamination</title>
        <meta name="description" content="Description of NewExamination" />
      </Helmet>
      <Container>
        <PageHeader
          onBack={() => window.history.back()}
          title="Moussa Diop"
          subTitle="Nouvel examen"
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
        <h2>Nouvel examen</h2>
        <AutoForm schema={schema}>
          <Row>
            <Col span={24}>
              <AutoFields fields={['examen_type', 'commentaire', 'content']} />
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
