/**
 *
 * Profile
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
// import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectProfile } from './selectors';
import { profileSaga } from './saga';
import { Container } from 'app/components/Container';
import {
  Badge,
  Col,
  Descriptions,
  Divider,
  PageHeader,
  Row,
  Space,
} from 'antd';
import { AutoFields, AutoForm, SubmitField } from 'uniforms-antd';
import schema from './schema';

interface Props {}

export const Profile = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: profileSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const profile = useSelector(selectProfile);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Description of Profile" />
      </Helmet>
      <Container>
        <Space direction="vertical">
          <PageHeader
            avatar={{
              size: 64,
              src: 'https://randomuser.me/api/portraits/men/91.jpg',
            }}
            title="Dr. Mbaye Diousso"
          >
            <Descriptions bordered column={{ xs: 1, md: 2 }}>
              <Descriptions.Item label="Spécialité">
                Médécin généraliste
              </Descriptions.Item>
              <Descriptions.Item label="Service">
                Grands-blessés
              </Descriptions.Item>
              <Descriptions.Item label="Téléphone">
                77 123 45 67
              </Descriptions.Item>
              <Descriptions.Item label="Statut">
                <Badge status="success" />
                Actif/Disponible
              </Descriptions.Item>
            </Descriptions>
          </PageHeader>
          <Divider />
          <h3>Mise à jour des informations</h3>
          <AutoForm schema={schema} onChange={() => {}}>
            <Row gutter={16}>
              <Col span={24}>
                <AutoFields
                  fields={[
                    'firstName',
                    'lastName',
                    'speciality',
                    'phone',
                    'password',
                  ]}
                />
              </Col>
            </Row>
            <Row justify="end">
              <Col span={5}>
                <SubmitField block value="Mettre à jour" />
              </Col>
            </Row>
          </AutoForm>
        </Space>
      </Container>
    </>
  );
});
