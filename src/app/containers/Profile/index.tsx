/**
 *
 * Profile
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectProfile } from './selectors';
import { profileSaga } from './saga';
import { Container } from 'app/components/Container';
import {
  Avatar,
  Button,
  Col,
  Descriptions,
  Divider,
  Dropdown,
  Menu,
  Row,
  Space,
  Tabs,
} from 'antd';
// import { AutoFields, AutoForm, SubmitField } from 'uniforms-antd';
// import schema from './schema';
import { IconDots, IconEdit } from 'app/components/customIcons';

const menu = (
  <Menu>
    <Menu.Item>Suspendre l'accès</Menu.Item>
    <Menu.Divider />
    <Menu.Item disabled>Autre actions</Menu.Item>
  </Menu>
);

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
          <Row gutter={16} justify="space-between" align="middle">
            <Col>
              <Space size="large">
                <Avatar
                  src="https://randomuser.me/api/portraits/men/91.jpg"
                  size={92}
                />
                <div>
                  <h3 className="mb-0">DR. MBAYE DIOUSSO</h3>
                  <div>
                    <b>Médécin généraliste</b>
                  </div>
                  <a href="##">
                    <b>Grands-blessés</b>
                  </a>
                </div>
              </Space>
            </Col>
            <Col>
              <Space size="middle">
                <StyledButton icon={<IconEdit />}>Modifier</StyledButton>

                <Dropdown
                  overlay={menu}
                  placement="bottomRight"
                  trigger={['click']}
                >
                  <StyledButton icon={<IconDots />} />
                </Dropdown>
              </Space>
            </Col>
          </Row>
          {/* <PageHeader
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
          </PageHeader> */}
          <Divider />

          <Tabs defaultActiveKey="infos" type="card">
            <Tabs.TabPane tab="Informations personnelles" key="infos">
              <Row gutter={16}>
                <Col span={12}>
                  <h3>Contacts</h3>
                  <Descriptions column={1} size="middle" bordered>
                    <Descriptions.Item label="Téléphone">
                      77.123.45.67
                    </Descriptions.Item>
                    <Descriptions.Item label="Email">
                      dioussou@johnhopkins.edu
                    </Descriptions.Item>
                    <Descriptions.Item label="Adresse">
                      17 Rue Moussé Diop,
                      <br />
                      Cité Keur Guorgui.
                      <br />
                      Dakar, Sénégal
                    </Descriptions.Item>
                  </Descriptions>
                  <Divider />
                  <h3>Etat-Civil</h3>
                  <Descriptions column={1} size="middle" bordered>
                    <Descriptions.Item label="Situat. Matrim.">
                      Marié
                    </Descriptions.Item>
                  </Descriptions>
                  <Divider />
                  <h3>Contacts d'urgence</h3>
                  <Descriptions column={1} size="middle" bordered>
                    <Descriptions.Item label="Nom">
                      Maïmouna Diousso
                    </Descriptions.Item>
                    <Descriptions.Item label="Téléphone">
                      77.123.45.67
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col span={12}>
                  <h3>Citoyenneté</h3>
                  <Descriptions column={1} size="middle" bordered>
                    <Descriptions.Item label="Nationnalité">
                      Sénégalaise
                    </Descriptions.Item>
                    <Descriptions.Item label="Carte d'ID">
                      5124098135678
                    </Descriptions.Item>
                    <Descriptions.Item label="Genre">Homme</Descriptions.Item>
                    <Descriptions.Item label="Date de naissance">
                      17/03/1984
                    </Descriptions.Item>
                    <Descriptions.Item label="Lieu de naissance">
                      Thiès
                    </Descriptions.Item>
                    <Descriptions.Item label="Pays de naissance">
                      Côte d'Ivoire
                    </Descriptions.Item>
                  </Descriptions>
                  <Divider />
                  <h3>Charges</h3>
                  <Descriptions column={1} size="middle" bordered>
                    <Descriptions.Item label="Nombre d'enfants">
                      2 enfants
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Informations professionnelles" key="pro">
              <Row gutter={16}>
                <Col span={24}>
                  <h3>Service</h3>
                  <Descriptions column={2} size="middle" bordered>
                    <Descriptions.Item label="Spécialité">
                      Dermatologue
                    </Descriptions.Item>
                    <Descriptions.Item label="Service">
                      Dermatologie
                    </Descriptions.Item>
                    <Descriptions.Item label="Chef de Service">
                      <a href="##">John Kazakh</a>
                    </Descriptions.Item>
                    {/* <Descriptions.Item label="Adresse">
                      17 Rue Moussé Diop, Cité Keur Guorgui. Dakar, Sénégal
                    </Descriptions.Item> */}
                  </Descriptions>
                </Col>
              </Row>
            </Tabs.TabPane>
          </Tabs>
          {/* <AutoForm schema={schema} onChange={() => {}}>
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
          </AutoForm> */}
        </Space>
      </Container>
    </>
  );
});

const StyledButton = styled(Button)`
  font-size: unset;
  .anticon {
    font-size: 18px;
  }
`;
