/**
 *
 * Dashboard
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

import { UserAddOutlined } from '@ant-design/icons';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectDashboard } from './selectors';
import { dashboardSaga } from './saga';
import { Container } from 'app/components/Container';

import { Input, Row, Col } from 'antd';
import { BigButton } from 'app/components/BigButton';
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

  // const today = dayjs().locale('fr').format('dddd LL').toUpperCase();
  // const [notifPinned, setnotifPinned] = useState(false);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Description of Dashboard" />
      </Helmet>
      <MainContent>
        <SearchBox
          placeholder="Rechercher un dossier"
          onSearch={value => console.log(value)}
          enterButton
        />
        <Row>
          <Col span={6}>
            <BigButton
              type="primary"
              href="/adduser"
              icon={<UserAddOutlined />}
            >
              Ajouter un usager
            </BigButton>
          </Col>
        </Row>
      </MainContent>
    </>
  );
});

const MainContent = styled(Container)`
  padding-top: 40px;
`;

const SearchBox = styled(Search)`
  margin-bottom: 40px;

  .ant-input-search-button {
    height: 55px;
    font-size: 20px;
  }
`;
