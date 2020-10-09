/**
 *
 * HospitalisationDetails
 *
 */

import {
  Button,
  Col,
  Comment,
  Descriptions,
  Form,
  Image,
  Input,
  List,
  Row,
  Space,
  Tag,
  Typography,
} from 'antd';
import { Container } from 'app/components/Container';
import { PageHeader } from 'app/components/PageHeader';
import React, { memo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { DeleteFilled, EditFilled } from '@ant-design/icons';

import { hospitalisationDetailsSaga } from './saga';
import { selectHospitalisationDetails } from './selectors';
import { reducer, sliceKey } from './slice';
import { history } from 'utils/history';
import Dragger from 'antd/lib/upload/Dragger';

// import UserAvatar from 'react-user-avatar';
import { InboxOutlined } from '@ant-design/icons';

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
      files: [
        {
          url:
            'https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3024&q=80',
          thumbUrl:
            'https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
        },
        {
          url:
            'https://images.unsplash.com/photo-1517816428104-797678c7cf0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3326&q=80',
          thumbUrl:
            'https://images.unsplash.com/photo-1517816428104-797678c7cf0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
        },
      ],
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
      <Form.Item label="Fichier(s) à joindre" extra="" help="">
        <Dragger
          multiple
          listType="picture"
          action="https://next.json-generator.com/api/json/get/NylupQXUY"
          accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf,.png,.tiff,.jpg,.jpeg,.bmp"
        >
          <StyledIcon>
            <InboxOutlined size={54} />
          </StyledIcon>
          <p>Cliquez pour sélectionner ou glissez un ou plusieurs fichier(s)</p>
          <Typography.Paragraph type="secondary">
            Seuls les fichiers PDF, Word ou images sont acceptés
          </Typography.Paragraph>
        </Dragger>
      </Form.Item>
      <Row justify="end">
        <Col span={5}>
          <Form.Item>
            <Button
              block
              htmlType="submit"
              loading={submitting}
              onClick={onSubmit}
              type="primary"
            >
              Enregistrer
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const hospitalisationDetails = useSelector(selectHospitalisationDetails);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const [displayForm, setDisplayForm] = useState(false);

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
          onBack={history.goBack}
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
                header={<Typography.Title level={5}>Notes : </Typography.Title>}
                itemLayout="vertical"
                dataSource={data.notes}
                split
                renderItem={item => (
                  <li className="border-b pb-1 mb-1">
                    <Comment
                      author={<a href="#mr3">{`Dr. ${item.author}`}</a>}
                      datetime={item.date}
                      // avatar={<UserAvatar size="42" name={item.author} />}
                      content={
                        <div>
                          {item.observation && (
                            <div className="mt-1">
                              <Tag color="geekblue">
                                Observations / Intervention
                              </Tag>
                              <p className="mt-1">{item.observation}</p>
                            </div>
                          )}
                          {item.observation && (
                            <div className="mt-1">
                              <Tag color="warning">Conduite à tenir</Tag>
                              <p className="mt-1">{item.directive}</p>
                            </div>
                          )}
                          {item.files && (
                            <div className="mt-2">
                              <Typography.Text type="secondary">
                                Fichier(s) joints
                              </Typography.Text>

                              <Row gutter={16} className="mt-1">
                                {item.files.map(file => (
                                  <Col>
                                    <Image width={92} src={file.url} />
                                  </Col>
                                ))}
                              </Row>
                            </div>
                          )}
                        </div>
                      }
                    />
                  </li>
                )}
              />
              {!displayForm && (
                <Row justify="end" className="mt-2">
                  <Col span={5}>
                    <Button
                      block
                      type="primary"
                      onClick={() => setDisplayForm(true)}
                    >
                      Ajouter une note
                    </Button>
                  </Col>
                </Row>
              )}
              {displayForm && (
                <Row className="mt-2">
                  <Typography.Title level={5}>Nouvelle note</Typography.Title>
                  <Col span={24}>
                    <Editor
                      onChange={() => {}}
                      onSubmit={() => setDisplayForm(false)}
                      submitting={false}
                      value=""
                    />
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </Space>
      </Container>
    </>
  );
});

// const NotesDescriptions = styled(Descriptions)``;
const StyledIcon = styled.div`
  font-size: 44px;
`;
