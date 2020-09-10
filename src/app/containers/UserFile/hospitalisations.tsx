import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Row, Button, Modal, List, Col } from 'antd';
import { AutoForm } from 'uniforms-antd';
import shortid from 'shortid';
import dayjs from 'dayjs';

import { hospitalizationSchema } from './schemas';
import 'dayjs/locale/fr';
import capitalize from 'utils/capitalize';

var localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);
dayjs.locale('fr');

interface HospitalisationItem {
  id: string;
  date: string;
  hopital: string;
  medecin: string;
  motif_hospitalisation: string;
  commentaire?: string;
}

const data: Array<HospitalisationItem> = [
  {
    id: shortid.generate(),
    date: 'Jun 12 2020 17:29:12',
    motif_hospitalisation: 'Dolores atque accusantium.',
    hopital: 'Clinique Dupont - Dumas',
    medecin: 'Mathéo Renaud III',
    commentaire:
      'Harum doloribus reiciendis delectus consequuntur amet hic non ea et.',
  },
  {
    id: shortid.generate(),
    date: 'Apr 29 2020 05:27:33',
    motif_hospitalisation: 'Possimus fuga quam dolores temporibus.',
    hopital: 'Clinique Andre SARL',
    medecin: 'Noémie Giraud',
  },
  {
    id: shortid.generate(),
    date: 'Feb 08 2020 12:59:04',
    motif_hospitalisation:
      'Consectetur est qui quis qui et iure eaque accusamus quos.',
    hopital: 'Hopital Legrand GIE',
    medecin: 'Clément Robin',
    commentaire:
      'Similique consequatur nobis veniam rerum aut sit asperiores repellat sunt.',
  },
  {
    id: shortid.generate(),
    date: 'Oct 24 2019 15:50:16',
    motif_hospitalisation: 'Quasi atque facilis mollitia est deleniti numquam.',
    hopital: 'Hopital Denis EI',
    medecin: 'Raphaël Gauthier DDS',
  },
];

export const Hospitalisation = () => {
  const [displayHospitalisation, setdisplayHospitalisation] = useState(false);

  //Fri Jun 26 2020 13:46:56
  const parseDate = date =>
    capitalize(
      dayjs(date, 'MMM DD YYYY hh:mm:ss', 'en').locale('fr').format('llll'),
    );

  return (
    <>
      <Row justify="end">
        <Button type="primary" onClick={() => setdisplayHospitalisation(true)}>
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
                {item.motif_hospitalisation && (
                  <Col span={24}>
                    <p>
                      <b>Motif : </b> {item.motif_hospitalisation}
                    </p>
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
        title="Ajouter une hospitalisation"
        visible={displayHospitalisation}
        width="640px"
        centered
        onCancel={() => setdisplayHospitalisation(false)}
      >
        <AutoForm schema={hospitalizationSchema} />
      </Modal>
    </>
  );
};

const StyledMeta = styled(List.Item.Meta)`
  .ant-list-item-meta-title {
    font-size: 16px;
  }
`;