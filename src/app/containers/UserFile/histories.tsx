import React, { useState } from 'react';
import { Button, Collapse, List, Modal, Row } from 'antd';
import styled from 'styled-components/macro';
import { AutoForm } from 'uniforms-antd';
import { historySchema } from './schemas';

const { Panel } = Collapse;

interface HystoryItem {
  type: string;
  description: string;
}

const historyData: Array<HystoryItem> = [
  {
    type: 'medical',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
  },
  {
    type: 'lifestyle',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
  },
  {
    type: 'familial',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
  },
  {
    type: 'medical',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
  },
  {
    type: 'chirurgical',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
  },
  {
    type: 'chirurgical',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
  },
  {
    type: 'lifestyle',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
  },
  {
    type: 'familial',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
  },
  {
    type: 'familial',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
  },
  {
    type: 'familial',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
  },
  {
    type: 'medical',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
  },
  {
    type: 'lifestyle',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
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
            <List.Item.Meta description={item.description} />
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
          <Panel header="Mode de vie" key="lifestyle">
            {historyList('lifestyle')}
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
