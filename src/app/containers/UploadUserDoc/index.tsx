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
import { AutoFields, AutoForm } from 'uniforms-antd';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import styled from 'styled-components/macro';

import { UploadUserDocSaga } from './saga';
import { uploadDocSchema } from './schema';
import { selectUploadUserDoc } from './selectors';
import { reducer, sliceKey } from './slice';

import { ShortUserInformations } from '../../containers/UserFile/informations';

const { Title } = Typography;
const { Search } = Input;

interface Props {}

export const UploadUserDoc = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: UploadUserDocSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const uploadUserDoc = useSelector(selectUploadUserDoc);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Nouveau document dans un dossier patient</title>
        <meta
          name="description"
          content="Description of upload document to dossier patient"
        />
      </Helmet>
      <Container>
        <Title level={5}>
          Ajouter un nouveau document à un dossier patient
        </Title>
        <SearchBox placeholder="Saisir ici le numero du dossier" enterButton />

        <h4>Fichiers à joindre</h4>

        <Divider />

        <AutoForm schema={uploadDocSchema}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <ShortUserInformations />
            </Col>
            <Col span={12}>
              <AutoFields fields={['attachments']} />
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
