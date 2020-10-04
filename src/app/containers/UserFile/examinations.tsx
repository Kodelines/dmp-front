import 'dayjs/locale/fr';

import { Button, Col, Divider, List, Row, Select, Typography } from 'antd';
import { ListActionButton } from 'app/components/ListActionButton';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import capitalize from 'utils/capitalize';

import {
  DeleteFilled,
  EditFilled,
  FileSearchOutlined,
} from '@ant-design/icons';

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
  let { id } = useParams<{ id: string }>();

  //Fri Jun 26 2020 13:46:56
  const parseDate = date => capitalize(dayjs(date).locale('fr').format('llll'));
  const timeago = date => dayjs(date).locale('fr').fromNow();

  const grouped = new Map<string, Array<ExaminationItem>>();
  data.forEach(item => {
    const key = item.examen_type;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key)!!.push(item);
  });

  console.log('keys : ', grouped.keys());

  return (
    <>
      <Row align="middle" gutter={32}>
        <Col span={8}>
          <Select
            showSearch
            style={{ width: 280 }}
            placeholder="Filtrer par type d'examen"
            filterOption={(input, option) =>
              option!!.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Select.Option value="echographie">
              Echographie obstétricale
            </Select.Option>
            <Select.Option value="radiologie">Radiologie</Select.Option>
          </Select>
        </Col>
        <Col span={6}>
          <StyledDatePicker
            type="date"
            pattern="\d{2}-\d{2}-\d{4}"
            // value={new Date().toDateString()}
            min="2018-01-01"
            max={new Date().toDateString()}
          />
        </Col>
        <Col span={6} offset={4}>
          <Button type="primary" href={`/userfile/${id}/add-examination`}>
            Ajouter un examen
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>
          <List
            itemLayout="vertical"
            dataSource={data}
            renderItem={it => (
              <List.Item key={it.id}>
                <div>
                  <Typography.Text>
                    {parseDate(it.date)} - {timeago(it.date)}
                  </Typography.Text>
                </div>
                <div>
                  <Typography.Text type="secondary">
                    {it.hopital}
                  </Typography.Text>
                </div>
                <div>
                  <Typography.Text strong>
                    Examen : {it.examen_type}
                  </Typography.Text>
                </div>
                <div>
                  <ListActionButton
                    text="Voir les détails"
                    icon={<FileSearchOutlined />}
                    href={`/userfile/${id}/examination/${it.id}`}
                  />
                  <ListActionButton text="Modifier" icon={<EditFilled />} />
                  <ListActionButton danger icon={<DeleteFilled />} />
                </div>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

const StyledDatePicker = styled.input`
  position: relative;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 0.4125rem;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  height: 32px;
  padding: 0 11px;
  color: #000000d9;

  &[value=''] {
    color: #c2c2c2;
  }
`;
