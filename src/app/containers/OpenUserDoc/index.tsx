/**
 *
 * UploadUserDoc
 *
 */

import { Col, Divider, Row, Typography, Input } from 'antd';
import { Container } from 'app/components/Container';
import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
// import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
// import styled from 'styled-components/macro';
import { AutoFields, AutoForm, SubmitField } from 'uniforms-antd';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import styled from 'styled-components/macro';

import { OpenUserDocSaga } from './saga';
import { openUserDocSchema } from './schema';
import { selectOpenUserDoc } from './selectors';
import { reducer, sliceKey } from './slice';

import { ShortUserInformations } from '../UserFile/informations';

const { Title } = Typography;
const { Search } = Input;

interface Props {}

export const OpenUserDoc = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: OpenUserDocSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const openUserDoc = useSelector(selectOpenUserDoc);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Ouvrir un nouveau dossier patient</title>
        <meta
          name="description"
          content="Description of open dossier patient"
        />
      </Helmet>
      <Container>
        <Title level={5}>Ouvrir un nouveau dossier patient</Title>
        <SearchBox
          placeholder="Saisir ici l'identifiant unique du patient"
          enterButton
        />

        <h4>Affectation d'un médecin</h4>

        <Divider />

        <AutoForm schema={openUserDocSchema}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <ShortUserInformations />
            </Col>
            <Col span={12}>
              <AutoFields fields={['attending_doctor']} />
            </Col>
          </Row>
          <Row justify="center">
            <Col span={5}>
              <SubmitField block value="Valider" />
            </Col>
          </Row>
        </AutoForm>
      </Container>
    </>
  );
});

// const Div = styled.div``;

const SearchBox = styled(Search)`
  margin-bottom: 40px;

  .ant-input-search-button {
    height: 55px;
    font-size: 20px;
  }
`;
