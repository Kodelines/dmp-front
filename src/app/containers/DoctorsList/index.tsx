/**
 *
 * DoctorsList
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectDoctorsList } from './selectors';
import { doctorsListSaga } from './saga';
import {
  Avatar,
  Button,
  Col,
  Divider,
  Dropdown,
  List,
  Menu,
  PageHeader,
  Row,
} from 'antd';
import { Container } from 'app/components/Container';
import { IconDots } from 'app/components/customIcons';

import data from './doctors.json';

// const columns = [
//   {
//     title: 'Infos',
//     key: 'infos',
//     render: (_, record) => (
//       <Row gutter={16} align="middle">
//         <Col>
//           <Avatar
//             size={64}
//             src={
//               'https://source.unsplash.com/collection/1831207/120x120?seed=' +
//               record.id
//             }
//           />
//         </Col>
//         <Col>
//           <div>
//             <a href="##">
//               {record.firstName} {record.lastName}
//             </a>
//           </div>
//           <div>{record.email}</div>
//         </Col>
//       </Row>
//     ),
//   },
//   {
//     title: 'Nom',
//     dataIndex: 'lastName',
//     key: 'lastName',
//   },
//   {
//     title: 'Téléphone',
//     dataIndex: 'phone',
//     key: 'phone',
//   },
//   {
//     title: 'Téléphone',
//     dataIndex: 'phone',
//     key: 'phone',
//   },
// ];

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

interface Props {}

export const DoctorsList = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: doctorsListSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const doctorsList = useSelector(selectDoctorsList);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>DoctorsList</title>
        <meta name="description" content="Description of DoctorsList" />
      </Helmet>
      <Container>
        <PageHeader title="Liste des médécins" />
        <Divider />
        <Row className="mb-2">
          <Col span={10}>Infos</Col>
          <Col span={4}>Téléphone</Col>
          <Col span={4}>Spécialité</Col>
          <Col span={4}>Service</Col>
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
                <Col span={2}>
                  <Avatar
                    src={
                      'https://source.unsplash.com/collection/1831207/120x120?seed=' +
                      item.id
                    }
                    size={64}
                  />
                </Col>
                <Col span={8}>
                  <div>
                    <a href="##">{item.firstName + ' ' + item.lastName}</a>
                  </div>
                  <div>{item.email}</div>
                </Col>
                <Col span={4}>{item.phone}</Col>
                <Col span={4}>{item.speciality}</Col>
                <Col span={4}>
                  <a href="##">{item.service}</a>
                </Col>
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
