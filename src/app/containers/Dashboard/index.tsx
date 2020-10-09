/**
 *
 * Dashboard
 *
 */

// import dayjs from 'dayjs';
import 'dayjs/locale/fr';

import { Col, Input, Row } from 'antd';
import { BigButton } from 'app/components/BigButton';
import { Container } from 'app/components/Container';
import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { UserAddOutlined, FileAddFilled } from '@ant-design/icons';

import { dashboardSaga } from './saga';
import { selectDashboard } from './selectors';
import { reducer, sliceKey } from './slice';

// import colors from 'styles/colors';
// import Alert from '../../components/Alert/index';
// import { BigButton } from '../../components/BigButton/index';

// const { Title, Text } = Typography;
const { Search } = Input;

interface Props {}

export const Dashboard = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: dashboardSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dashboard = useSelector(selectDashboard);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  let history = useHistory();

  const handleClick = () => history.push('/userfile/123456');

  // const today = dayjs().locale('fr').format('dddd LL').toUpperCase();
  // const [notifPinned, setnotifPinned] = useState(false);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Description of Dashboard" />
      </Helmet>
      <Container>
        <SearchBox
          placeholder="Rechercher un dossier"
          onSearch={handleClick}
          enterButton
        />
        <Row justify="start" gutter={16}>
          <Col span={6}>
            <BigButton
              type="primary"
              href="/adduser"
              icon={<UserAddOutlined />}
            >
              Nouveau dossier patient
            </BigButton>
          </Col>
          <Col span={6}>
            <BigButton
              type="primary"
              href="/uploaddoc"
              icon={<FileAddFilled />}
            >
              Ajouter un document à un dossier patient
            </BigButton>
          </Col>
        </Row>
      </Container>
    </>
  );
});

const SearchBox = styled(Search)`
  margin-bottom: 40px;

  .ant-input-search-button {
    height: 55px;
    font-size: 20px;
  }
`;
