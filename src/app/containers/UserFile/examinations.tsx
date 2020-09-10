import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Row, Button, Modal, List, Col } from 'antd';
import { AutoForm } from 'uniforms-antd';
import dayjs from 'dayjs';

import { examinationSchema } from './schemas';
import 'dayjs/locale/fr';
import capitalize from 'utils/capitalize';

var localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);
dayjs.locale('fr');

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
    id: '97160c8a',
    date: '2017-07-01T16:27:08Z',
    hopital: 'Hermann, Daugherty and Bailey',
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
    id: '43b80d6c',
    date: '2020-06-24T04:48:08Z',
    hopital: 'Cole LLC',
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
    hopital: 'Mann, Johns and Harvey',
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
    hopital: 'Marvin-Jaskolski',
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
    id: 'a7b5f5af',
    date: '2018-02-08T21:24:25Z',
    hopital: 'Corwin, Cassin and Ward',
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
  const parseDate = date =>
    capitalize(
      dayjs(date, 'MMM DD YYYY hh:mm:ss', 'en').locale('fr').format('llll'),
    );

  return (
    <>
      <Row justify="end">
        <Button type="primary" onClick={() => setDisplayExam(true)}>
          Ajouter une hospitalisation
        </Button>
      </Row>
      <Row>
        <List
          itemLayout="vertical"
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.id}>
              <Row>
                <Col span={24}>
                  <StyledMeta
                    title={parseDate(item.date)}
                    description={item.hopital}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <p>
                    <b>Médécin : </b> {item.medecin}
                  </p>
                </Col>
                {item.content && (
                  <Col span={24}>
                    {item.content.map(element => (
                      <p>
                        <b>{element.key} : </b> {element.value}
                      </p>
                    ))}
                  </Col>
                )}
                {item.commentaire && (
                  <Col span={24}>
                    <p>
                      <b>Commentaire : </b>
                      {item.commentaire}
                    </p>
                  </Col>
                )}
              </Row>
            </List.Item>
          )}
        />
      </Row>
      <Modal
        title="Ajouter un examen"
        visible={displayExam}
        width="640px"
        centered
        onCancel={() => setDisplayExam(false)}
      >
        <AutoForm schema={examinationSchema} />
      </Modal>
    </>
  );
};

const StyledMeta = styled(List.Item.Meta)`
  .ant-list-item-meta-title {
    font-size: 16px;
  }
`;
