import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Row, Button, Modal, List, Col } from 'antd';
import { AutoForm } from 'uniforms-antd';
import shortid from 'shortid';
import dayjs from 'dayjs';

import { consultationSchema } from './schemas';
import 'dayjs/locale/fr';
import capitalize from 'utils/capitalize';

var localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);
dayjs.locale('fr');

interface ConsultationItem {
  id: string;
  date: string;
  hopital: string;
  medecin: string;
  motif_consultation?: string;
  histoire_maladie?: string;
  commentaire?: string;
}

const data: Array<ConsultationItem> = [
  {
    id: shortid.generate(),
    date: 'Jun 26 2020 13:46:56',
    motif_consultation:
      'Consequatur vitae ea dolorem porro dolores quam voluptatibus qui suscipit.',
    hopital: 'Clinique Berger SA',
    medecin: 'Clément Robin',
  },
  {
    id: shortid.generate(),
    date: 'Mar 15 2020 18:01:24',
    motif_consultation:
      'Aspernatur illo repellat qui ipsa corrupti vel assumenda sit repellendus.',
    commentaire: 'Praesentium doloribus excepturi nisi.',
    hopital: 'Clinique Perez, Hubert and Lacroix',
    medecin: 'Noémie Giraud',
  },
  {
    id: shortid.generate(),
    date: 'Feb 14 2020 04:47:29',
    motif_consultation: 'Sit et laborum qui aut voluptatum.',
    histoire_maladie:
      'Placeat voluptatem optio enim et sed iste reiciendis eos. Accusantium unde sunt aut sit laudantium sunt rem delectus. Dolores neque rerum. Unde ut id error. Illum repellat facere dolorem amet sed laborum.',
    hopital: 'Clinique Marty EI',
    medecin: 'Mathéo Renaud III',
  },
  {
    id: shortid.generate(),
    date: 'Jan 23 2020 11:07:16',
    motif_consultation: 'Molestiae minus libero.',
    histoire_maladie:
      'Ullam nisi et culpa at. Qui eos voluptas et facilis voluptas est ullam voluptatum magni.',
    commentaire: 'Sit nisi maxime in.',
    hopital: 'Clinique Joly, Leclercq and Denis',
    medecin: 'Raphaël Gauthier DDS',
  },
];

export const Consultations = () => {
  const [displayConsultation, setDisplayConsultation] = useState(false);

  //Fri Jun 26 2020 13:46:56
  const parseDate = date =>
    capitalize(
      dayjs(date, 'MMM DD YYYY hh:mm:ss', 'en').locale('fr').format('llll'),
    );

  return (
    <>
      <Row justify="end">
        <Button type="primary" onClick={() => setDisplayConsultation(true)}>
          Ajouter une consultation
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
                {item.motif_consultation && (
                  <Col span={24}>
                    <p>
                      <b>Motif : </b> {item.motif_consultation}
                    </p>
                  </Col>
                )}
                {item.histoire_maladie && (
                  <Col span={24}>
                    <p>
                      <b>Histoire maladie : </b>
                      {item.histoire_maladie}
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
        title="Ajouter une consultation"
        visible={displayConsultation}
        width="640px"
        centered
        onCancel={() => setDisplayConsultation(false)}
      >
        <AutoForm schema={consultationSchema} />
      </Modal>
    </>
  );
};

const StyledMeta = styled(List.Item.Meta)`
  .ant-list-item-meta-title {
    font-size: 16px;
  }
`;
