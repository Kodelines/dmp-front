/**
 *
 * MyPatients
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectMyPatients } from './selectors';
import { myPatientsSaga } from './saga';
import { Container } from 'app/components/Container';
import {
  Button,
  Col,
  Divider,
  Dropdown,
  List,
  Menu,
  PageHeader,
  Row,
} from 'antd';
import { IconDots } from 'app/components/customIcons';

import data from './patients.json';

interface Props {}

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="##">
        Modifier
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="##">
        Supprimer
      </a>
    </Menu.Item>
  </Menu>
);

export const MyPatients = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: myPatientsSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const myPatients = useSelector(selectMyPatients);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>MyPatients</title>
        <meta name="description" content="Description of MyPatients" />
      </Helmet>
      <Container>
        <PageHeader
          title="Mes patients"
          subTitle="Patients dont vous êtes le médécin traitant"
        />
        <Divider />
        <Row className="mb-2">
          <Col span={8}>Infos</Col>
          <Col span={4}>Téléphone</Col>
          <Col span={2}>Genre</Col>
          <Col span={4}>Ville</Col>
          <Col span={4}>Dernière visite</Col>
          <Col span={2}>Actions</Col>
        </Row>
        <List
          itemLayout="horizontal"
          split
          dataSource={data}
          pagination={{
            pageSize: 10,
          }}
          renderItem={item => (
            <StyledItem>
              <FullRow gutter={16} align="middle">
                <Col span={8}>
                  <div>
                    <a href="/userfile/123456">
                      {item.firstName + ' ' + item.lastName}
                    </a>
                  </div>
                  <div>{item.email}</div>
                </Col>
                <Col span={4}>{item.phone}</Col>
                <Col span={2}>{item.gender}</Col>
                <Col span={4}>
                  <b>{item.city}</b>
                </Col>
                <Col span={4}>{item.lastVisit}</Col>
                <Col className="text-right" span={2}>
                  <Dropdown
                    overlay={menu}
                    placement="bottomLeft"
                    trigger={['click']}
                  >
                    <Button
                      type="link"
                      style={{ fontSize: '16px' }}
                      size="small"
                    >
                      <IconDots />
                    </Button>
                  </Dropdown>
                </Col>
              </FullRow>
            </StyledItem>
          )}
        />
        {/* <Table bordered dataSource={data} columns={columns} /> */}
      </Container>
    </>
  );
});

const FullRow = styled(Row)`
  width: 100%;
`;

const StyledItem = styled(List.Item)`
  border: solid 1px #ddd !important;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 16px !important;
`;
