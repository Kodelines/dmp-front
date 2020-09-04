/**
 *
 * Login
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectLogin } from './selectors';
import { loginSaga } from './saga';
import { Row, Col, Typography, Form, Input, Switch, Button } from 'antd';
import colors from 'styles/colors';

interface Props {}

const { Title, Paragraph } = Typography;

const quotes = [
  {
    quote: "Existe-t-il pour l'Homme un bien plus précieux que la Santé ?",
    author: 'Socrate',
  },
  {
    quote:
      "Deux choses ne s'apprécient bien que quand on ne les a plus : la santé et la jeunesse.",
    author: 'Proverbe Algérien',
  },
  {
    quote: 'Qui est en bonne santé est riche sans le savoir.',
    author: 'Proverbe Français',
  },
  {
    quote: "La santé, c'est un esprit sain dans un corps sain.",
    author: 'Homère',
  },
  {
    quote: "C'est posséder un trésor que de jouir d'une santé parfaite.",
    author: 'Proverbe Oriental',
  },
  {
    quote:
      'Le premier bien est la santé, le deuxième la beauté, le troisième la richesse.',
    author: 'Platon',
  },
];

export const Login = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = useSelector(selectLogin);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const year = new Date().getFullYear();

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      {/* <Div>{t('')}</Div> */}
      <LoginPage>
        <LeftPanel>
          <h1>LOGO</h1>
          <FlexibleContainer>
            <Title level={4}>Connexion</Title>
            <Paragraph type="secondary">
              Entrez votre adresse email et votre mot de passe pour accéder à
              votre compte.
            </Paragraph>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Veuillez saisir votre adresse email',
                  },
                ]}
              >
                <Input />
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
                <Input.Password />
              </Form.Item>
              <Form.Item name="remember">
                <Switch /> Rester connecté
              </Form.Item>
              <Form.Item>
                <Button block type="primary" href="/dashboard">
                  Se connecter
                </Button>
              </Form.Item>
            </Form>
          </FlexibleContainer>
          <div>© {year} DMP</div>
        </LeftPanel>
        <RightPanel>
          <QuoteContainer>
            <Quote>{quote.quote}</Quote>
            <Author>&mdash; {quote.author}</Author>
          </QuoteContainer>
        </RightPanel>
      </LoginPage>
    </>
  );
});
// https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80
// https://images.unsplash.com/photo-1536064479547-7ee40b74b807?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80
const backgroundImage =
  'https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80';

// const Div = styled.div``;

const LoginPage = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100vh;
`;

const LeftPanel = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 80px;
`;

const FlexibleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightPanel = styled.div`
  display: flex;
  flex: 4;
  height: 100vh;
  background-color: ${colors.secondary};
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center center;
  position: relative;
  justify-content: end;
  align-items: center;

  ::after {
    content: ' ';
    background-color: ${colors.secondary}88;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
`;

const QuoteContainer = styled.div`
  position: relative;
  font-weight: 800;
  color: #ffffff;
  padding: 30px 0;
  width: 100%;
  max-width: 65%;
  z-index: 1;
  margin: 80px auto;
  align-self: center;
  border-top: solid 1px;
  border-bottom: solid 1px;
  z-index: 1;

  :after {
    position: absolute;
    content: '”';
    font-family: sans-serif;
    color: white;
    font-size: 10rem;
    line-height: 0;
    bottom: -43px;
    right: 30px;
    text-shadow: 0 0 2px #00000088;
  }
`;

const Quote = styled.blockquote`
  position: relative;
  font-size: 40px;
  font-weight: 800;
  line-height: 1.2;
  margin: 0;
  color: white;
  text-shadow: 0 0 2px #00000066;
`;

const Author = styled.p`
  position: relative;
  color: #ffb843;
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1;
  margin: 0;
  padding-top: 20px;
  z-index: 1;
  text-shadow: 0 0 2px #00000066;
`;
