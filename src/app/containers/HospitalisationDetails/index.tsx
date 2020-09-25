/**
 *
 * HospitalisationDetails
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectHospitalisationDetails } from './selectors';
import { hospitalisationDetailsSaga } from './saga';
import { Container } from 'app/components/Container';
import {
  Button,
  Col,
  Comment,
  Descriptions,
  Divider,
  Form,
  Input,
  List,
  Row,
  Space,
  Tag,
  Typography,
} from 'antd';
import { PageHeader } from 'app/components/PageHeader';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
// import UserAvatar from 'react-user-avatar';

const data = {
  patient: 'Moussa Diop',
  patientId: '123456',
  date: 'Ven. 12 Juin 2020 17:29',
  hospital: 'Clinique Dupont - Dumas',
  doctor: 'Mathéo Renaud III',
  reason: 'Dolores atque accusantium.',
  notes: [
    {
      author: 'Mathéo Renaud III',
      observation:
        'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      directive:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper.',
      date: 'Ven. 12 Juin 2020 18:29',
    },
    {
      author: 'Mathéo Renaud III',
      observation:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      directive: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
      date: 'Ven. 12 Juin 2020 19:29',
    },
    {
      author: 'Mathéo Renaud III',
      observation:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      directive:
        'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
      date: 'Ven. 12 Juin 2020 20:29',
    },
  ],
};

interface Props {}

export const HospitalisationDetails = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: hospitalisationDetailsSaga });

  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <Form layout="vertical">
      <Form.Item label="Observations / Intervention">
        <Input.TextArea rows={2} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item label="Conduite à tenir">
        <Input.TextArea rows={2} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Ajouter une note
        </Button>
      </Form.Item>
    </Form>
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const hospitalisationDetails = useSelector(selectHospitalisationDetails);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>HospitalisationDetails</title>
        <meta
          name="description"
          content="Description of HospitalisationDetails"
        />
      </Helmet>
      <Container>
        <PageHeader
          onBack={() => window.history.back()}
          title="Moussa Diop"
          subTitle="Détails hospitalisation"
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
              Ven. 12 Juin 2020 17:29
            </Descriptions.Item>
            <Descriptions.Item label="Etablissement">
              Clinique Dupont - Dumas
            </Descriptions.Item>
            <Descriptions.Item label="Médécin">
              Mathéo Renaud III
            </Descriptions.Item>
            <Descriptions.Item label="Motif">
              Dolores atque accusantium.
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
        <Space>
          <Row>
            <Col>
              {/* <Typography.Title level={5}>Notes : </Typography.Title> */}
              <List
                className="comment-list"
                header={<Typography.Title level={5}>Notes : </Typography.Title>}
                itemLayout="horizontal"
                dataSource={data.notes}
                renderItem={item => (
                  <li>
                    <Comment
                      author={<a href="#mr3">{`Dr. ${item.author}`}</a>}
                      datetime={item.date}
                      // avatar={<UserAvatar size="42" name={item.author} />}
                      content={
                        <div>
                          <Tag color="geekblue">
                            Observations / Intervention
                          </Tag>
                          <p>{item.observation}</p>
                          <Tag color="warning">Conduite à tenir</Tag>
                          <p>{item.directive}</p>
                          {/* <NotesDescriptions column={1} bordered>
                            <Descriptions.Item label="Observation">
                              {item.observation}
                            </Descriptions.Item>
                            <Descriptions.Item
                              label="Conduite à tenir"
                              span={16}
                            >
                              {item.directive}
                            </Descriptions.Item>
                          </NotesDescriptions> */}
                        </div>
                      }
                    />
                  </li>
                )}
              />
              <Divider />
              <Editor
                onChange={() => {}}
                onSubmit={() => {}}
                submitting={false}
                value=""
              />
            </Col>
          </Row>
        </Space>
      </Container>
    </>
  );
});

const NotesDescriptions = styled(Descriptions)``;
