import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Row, Button, Modal, List, Col, Descriptions, Collapse } from 'antd';
import {
  AutoForm,
  AutoFields,
  ListField,
  ListItemField,
  NestField,
  AutoField,
} from 'uniforms-antd';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { examinationSchema } from './schemas';
import 'dayjs/locale/fr';
import capitalize from 'utils/capitalize';

var localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);
dayjs.locale('fr');
dayjs.extend(relativeTime);

interface ExaminationItem {
  id: string;
  date: string;
  hopital: string;
  medecin: string;
  examen_type: string;
  commentaire?: string;
  content?: Array<{ key: string; value: string }>;
}

const data: Array<ExaminationItem> = [
  {
    id: '43b80d6c',
    date: '2020-06-24T04:48:08Z',
    hopital: 'Hopital Cole',
    medecin: 'Reyna Kohter',
    examen_type: 'Echographie obstétricale',
    commentaire:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    content: [
      {
        key: 'iaculis',
        value: 'Ligula in lacus curabitur at',
      },
      {
        key: 'ipsum',
        value: 'Eu tincidunt in leo maecenas',
      },
      {
        key: 'ultrices erat',
        value: 'Habitasse platea dictumst etiam faucibus cursus urna ut',
      },
    ],
  },
  {
    id: '50928cf4',
    date: '2018-04-03T16:56:19Z',
    hopital: 'Hopital Mann, Johns and Harvey',
    medecin: 'Florian Epton',
    examen_type: 'Echographie obstétricale',
    commentaire: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    content: [
      {
        key: 'diam nam',
        value: 'Sociis natoque penatibus et magnis dis parturient montes',
      },
      {
        key: 'nulla sed',
        value: 'Curae donec pharetra magna vestibulum',
      },
      {
        key: 'id mauris',
        value: 'Eleifend donec ut dolor morbi vel lectus in',
      },
      {
        key: 'ac',
        value: 'Eu massa donec dapibus duis at velit eu est congue',
      },
      {
        key: 'pede venenatis',
        value: 'Nec dui luctus rutrum nulla tellus in sagittis',
      },
    ],
  },
  {
    id: '7ad6ff6c',
    date: '2017-10-17T06:45:29Z',
    hopital: 'Hopital Marvin-Jaskolski',
    medecin: 'Abbie Clemendot',
    examen_type: 'Radiologie',
    commentaire:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    content: [
      {
        key: 'blandit lacinia',
        value:
          'Platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget',
      },
      {
        key: 'amet',
        value: 'Lorem quisque ut erat curabitur gravida nisi at',
      },
      {
        key: 'nisi venenatis',
        value: 'Enim sit amet nunc viverra dapibus nulla suscipit ligula',
      },
      {
        key: 'ut blandit',
        value: 'Tristique est et tempus semper est',
      },
    ],
  },
  {
    id: '97160c8a',
    date: '2017-07-01T16:27:08Z',
    hopital: 'Clinique Hermann, Daugherty and Bailey',
    medecin: 'Terese Bilam',
    examen_type: 'Echographie obstétricale',
    commentaire:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    content: [
      {
        key: 'ac nulla',
        value: 'Eros vestibulum ac est lacinia nisi',
      },
    ],
  },
  {
    id: 'a7b5f5af',
    date: '2018-02-08T21:24:25Z',
    hopital: 'Clinique Corwin, Cassin and Ward',
    medecin: 'Haven Archbould',
    examen_type: 'Radiologie',
    commentaire: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    content: [
      {
        key: 'lacinia',
        value: 'Libero nam dui proin leo odio porttitor id',
      },
      {
        key: 'ornare consequat',
        value: 'Cursus vestibulum proin eu mi',
      },
    ],
  },
];

export const Examination = () => {
  const [displayExam, setDisplayExam] = useState(false);

  //Fri Jun 26 2020 13:46:56
  const parseDate = date => capitalize(dayjs(date).locale('fr').format('llll'));
  const timeago = date => dayjs(date).locale('fr').fromNow();

  return (
    <>
      <Row justify="end">
        <Button type="primary" onClick={() => setDisplayExam(true)}>
          Ajouter un examen
        </Button>
      </Row>
      <Row>
        <Col span={24}>
          <StyledCollapse>
            {data.map(item => (
              <Collapse.Panel
                header={
                  <PanelTitle>
                    <div>
                      {parseDate(item.date)} - {timeago(item.date)}
                    </div>
                    <div>{item.hopital}</div>
                  </PanelTitle>
                }
                key={item.id}
              >
                <Row>
                  <Col span={24}>
                    <p>
                      <b>Médécin : </b> {item.medecin}
                    </p>
                  </Col>
                </Row>
                {item.commentaire && (
                  <Row>
                    <Col span={24}>
                      <p>
                        <b>Commentaire : </b>
                        {item.commentaire}
                      </p>
                    </Col>
                  </Row>
                )}
                {item.content && (
                  <Row>
                    <Col span={24}>
                      <b>Examens : </b>
                      <br />
                      <br />
                      <Descriptions
                        bordered
                        size="middle"
                        column={{ md: 1, xs: 1 }}
                      >
                        {item.content.map(element => (
                          <Descriptions.Item label={element.key}>
                            {element.value}
                          </Descriptions.Item>
                        ))}
                      </Descriptions>
                      <br />
                    </Col>
                  </Row>
                )}
              </Collapse.Panel>
            ))}
          </StyledCollapse>
        </Col>
      </Row>
      <Modal
        title="Ajouter un examen"
        visible={displayExam}
        width="720px"
        centered
        onCancel={() => setDisplayExam(false)}
      >
        <AutoForm schema={examinationSchema}>
          <AutoFields fields={['examen_type', 'commentaire']} />
          <ListField
            label="Examens"
            name="content"
            initialCount={1}
            wrapperCol={12}
          >
            <ListItemField name="$">
              <NestField name="" label=" ">
                <Row gutter={24}>
                  <Col span={8}>
                    <AutoField name="key" size="small" />
                  </Col>
                  <Col span={16}>
                    <AutoField name="value" size="small" />
                  </Col>
                </Row>
              </NestField>
            </ListItemField>
          </ListField>
        </AutoForm>
      </Modal>
    </>
  );
};

const StyledMeta = styled.div`
  .ant-list-item-meta-title {
    font-size: 16px;
  }
`;

const StyledCollapse = styled(Collapse)`
  margin-top: 30px;
`;

const PanelTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
