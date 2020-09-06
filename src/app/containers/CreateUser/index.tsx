/**
 *
 * CreateUser
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { AutoForm, AutoFields, AutoField } from 'uniforms-antd';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectCreateUser } from './selectors';
import { createUserSaga } from './saga';
import { userSchema } from './schema';

interface Props {}

export const CreateUser = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: createUserSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const createUser = useSelector(selectCreateUser);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Nouveau Usager</title>
        <meta name="description" content="Description of CreateUser" />
      </Helmet>
      <Div>
        <AutoForm schema={userSchema} />
      </Div>
    </>
  );
});

const Div = styled.div``;
