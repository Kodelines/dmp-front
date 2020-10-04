/**
 *
 * NewHospitalisation
 *
 */

import React, { memo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
// import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectNewHospitalisation } from './selectors';
import { newHospitalisationSaga } from './saga';
import { Col, Descriptions, Divider, PageHeader, Row } from 'antd';
import schema from './schema';
import { AutoFields, AutoForm, SubmitField } from 'uniforms-antd';
import { Container } from 'app/components/Container';
import { history } from 'utils/history';

interface Props {}

export const NewHospitalisation = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: newHospitalisationSaga });

  const [formState, setFormState] = useState({});

  const onChange = (key: string, value) => {
    setFormState({ ...formState, [key]: value });
    console.log('formState : ', formState);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const newHospitalisation = useSelector(selectNewHospitalisation);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Nouvelle hospitalisation</title>
        <meta name="description" content="Description of NewHospitalisation" />
      </Helmet>
      <Container>
        <PageHeader
          onBack={history.goBack}
          title="Moussa Diop"
          subTitle="Nouvelle hospitalisation"
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
        <h2>Nouvelle hospitalisation</h2>
        <AutoForm schema={schema} model={formState} onChange={onChange}>
          <Row>
            <Col span={24}>
              <AutoFields
                fields={[
                  'motif_hospitalisation',
                  'histoire_maladie',
                  'commentaire',
                  'attachments',
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
