import {
  Button,
  Collapse,
  Descriptions,
  List,
  Modal,
  Row,
  Typography,
} from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { AutoForm } from 'uniforms-antd';

import { historySchema } from './schemas';

const { Panel } = Collapse;

interface HystoryItem {
  type: 'medical' | 'familial' | 'mode_de_vie' | 'chirurgical' | string;
  description: string;
  date: string;
}

const historyData: Array<HystoryItem> = [
  {
    type: 'chirurgical',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    date: '10/14/2019',
  },
  {
    type: 'familial',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    date: '06/24/2020',
  },
  {
    type: 'mode_de_vie',
    description: 'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    date: '09/08/2020',
  },
  {
    type: 'mode_de_vie',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    date: '10/20/2019',
  },
  {
    type: 'chirurgical',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    date: '06/21/2020',
  },
  {
    type: 'medical',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    date: '09/11/2020',
  },
  {
    type: 'mode_de_vie',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    date: '01/11/2020',
  },
  {
    type: 'mode_de_vie',
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    date: '04/19/2020',
  },
  {
    type: 'familial',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    date: '09/23/2019',
  },
  {
    type: 'familial',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    date: '01/22/2020',
  },
  {
    type: 'familial',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    date: '02/25/2020',
  },
  {
    type: 'mode_de_vie',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    date: '03/26/2020',
  },
];

interface Props {}

export const Histories = () => {
  const [displayHistory, setdisplayHistory] = useState(false);

  const historyList = (key: string) => {
    const data = historyData.filter(i => i.type === key);
    return (
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Descriptions size="small">
              <Descriptions.Item>{item.date}</Descriptions.Item>
              <Typography.Paragraph type="secondary">
                {item.description}
              </Typography.Paragraph>
            </Descriptions>
          </List.Item>
        )}
      />
    );
  };

  return (
    <>
      <Row justify="end">
        <Button type="primary" onClick={() => setdisplayHistory(true)}>
          Ajouter un antécédent
        </Button>
      </Row>
      <div>
        <StyledCollapse defaultActiveKey={['familial']}>
          <Panel header="Antécédent familial" key="familial">
            {historyList('familial')}
          </Panel>
          <Panel header="Antécédent chirurgical" key="chirurgical">
            {historyList('chirurgical')}
          </Panel>
          <Panel header="Antécédent medical" key="medical">
            {historyList('medical')}
          </Panel>
          <Panel header="Mode de vie" key="mode_de_vie">
            {historyList('mode_de_vie')}
          </Panel>
        </StyledCollapse>
      </div>

      <Modal
        title="Ajouter un antécédent"
        visible={displayHistory}
        width="640px"
        centered
        onCancel={() => setdisplayHistory(false)}
      >
        <AutoForm schema={historySchema} />
      </Modal>
    </>
  );
};

const StyledCollapse = styled(Collapse)`
  margin-top: 20px;
`;
