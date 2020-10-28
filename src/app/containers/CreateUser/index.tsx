/**
 *
 * CreateUser
 *
 */

import { Col, Divider, Row, Typography } from 'antd';
import { Container } from 'app/components/Container';
import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
// import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
// import styled from 'styled-components/macro';
import { AutoFields, AutoForm, SubmitField } from 'uniforms-antd';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { createUserSaga } from './saga';
import { userSchema } from './schema';
import { selectCreateUser } from './selectors';
import { reducer, sliceKey } from './slice';

const { Title } = Typography;

interface Props {}

export const CreateUser = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: createUserSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const createUser = useSelector(selectCreateUser);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Nouveau patient</title>
        <meta name="description" content="Description of create user" />
      </Helmet>
      <Container>
        <Title level={5}>Enrégister un nouveau patient</Title>
        <Divider />
        <AutoForm schema={userSchema} showInlineError>
          <Row gutter={16}>
            <Col span={12}>
              <AutoFields
                fields={['first_name', 'date_of_birth', 'sexe', 'phone_number']}
              />
            </Col>
            <Col span={12}>
              <AutoFields
                fields={[
                  'last_name',
                  'place_of_birth',
                  'situation_matrimoniale',
                ]}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <AutoFields fields={['type_document']} />
            </Col>
            <Col span={12}>
              <AutoFields fields={['identity_number']} />
            </Col>
          </Row>
          <h3 className="mt-4">Personne à prévenir en cas d'accident</h3>
          <Divider />
          <Row gutter={16}>
            <Col span={12}>
              <AutoFields fields={['contacts_lien', 'contacts_phone']} />
            </Col>
            <Col span={12}>
              <AutoFields fields={['contacts_noms', 'contacts_adresse']} />
            </Col>
          </Row>
          <h3 className="mt-4">Affecter un médécin</h3>
          <Row gutter={16}>
            <Col span={12}>
              <AutoFields fields={['attending_doctor']} />
            </Col>
          </Row>
          <Divider />
          <Row justify="end">
            <Col span={5}>
              <SubmitField block value="Valider" />
            </Col>
          </Row>
        </AutoForm>
      </Container>
    </>
  );
});

// const Div = styled.div``;
