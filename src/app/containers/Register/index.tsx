/**
 *
 * Register
 *
 */

import { Button, Col, Form, Input, Row, Typography } from 'antd';
import { Box } from 'app/components/Box';
import { Container } from 'app/components/Container';
import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { registerSaga } from './saga';
import { selectRegister } from './selectors';
import { reducer, sliceKey } from './slice';

const registerBack = require('assets/images/register.png');

const { Paragraph, Title } = Typography;

interface Props {}

export const Register = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: registerSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const register = useSelector(selectRegister);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Description of Register" />
      </Helmet>
      <StyledPage>
        <StyledContainer>
          <Row>
            <Col span={12} push={6}>
              <Box
                p="80px"
                borderWidth={1}
                borderColor="#dedede"
                bg="#fff"
                m="20px 0"
              >
                <Row justify="center" gutter={[0, 40]}>
                  <Title level={2}>RH-BOX</Title>
                </Row>
                <Row justify="center" gutter={[0, 40]}>
                  <CenteredText>
                    Commencez à améliorer la gestion de vos ressources humaines
                  </CenteredText>
                </Row>
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  // onFinish={onFinish}
                  // onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Veuillez saisir votre adresse email',
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined />}
                      placeholder="Email professionnel"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Veuillez saisir votre mot de passe',
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      placeholder="Mot de passe"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button block type="primary">
                      Se connecter
                    </Button>
                  </Form.Item>
                </Form>
                <Row>
                  <StyledParagraph>
                    En soumettant ce formulaire, je confirme avoir lu et accepté
                    la <a href="#privacy">politique de confidentialité</a> et{' '}
                    <a href="#terms">les conditions générales</a>.
                  </StyledParagraph>
                </Row>
              </Box>
              <CenteredText>
                Vous avez déjà un compte? <a href="/">Connectez-vous</a>
              </CenteredText>
            </Col>
          </Row>
        </StyledContainer>
      </StyledPage>
    </>
  );
});

const StyledPage = styled.div`
  background-color: #8f83a0;
  background-image: url(${registerBack});
  background-repeat: no-repeat;
  background-size: 25%;
  background-position-y: center;
  background-position-x: 20%;
`;

const CenteredText = styled(Paragraph)`
  text-align: center;
`;

const StyledContainer = styled(Container)`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 20px;
  font-size: 12px;
  color: #444;
`;
