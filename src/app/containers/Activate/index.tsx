/**
 *
 * Activate
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectActivate } from './selectors';
import { activateSaga } from './saga';
import { Typography } from 'antd';
import { Container } from 'app/components/Container';
import { Row } from 'antd';
import { Col } from 'antd';
import { Box } from 'app/components/Box';
import { Form } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';

const activateBack = require('assets/images/activate.png');

const { Paragraph, Title } = Typography;

interface Props {}

export function Activate(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: activateSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const activate = useSelector(selectActivate);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Activate</title>
        <meta name="description" content="Description of Activate" />
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
                    <Input placeholder="Email professionnel" />
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
                    <Input.Password placeholder="Mot de passe" />
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
}

const StyledPage = styled.div`
  background-color: #8f83a0;
  background-image: url(${activateBack});
  background-repeat: no-repeat;
  background-size: 25%;
  background-position-y: center;
  background-position-x: 20%;
`;

const StyledContainer = styled(Container)`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const CenteredText = styled(Paragraph)`
  text-align: center;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 20px;
  font-size: 12px;
  color: #444;
`;
