/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import { GlobalStyle } from 'styles/global-styles';

// import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { Login } from './containers/Login/Loadable';
import { Dashboard } from './containers/Dashboard/Loadable';
import styled from 'styled-components';
import { SideMenu } from './components/SideMenu';
import { AppHeader } from './components/AppHeader';
import { Register } from './containers/Register/Loadable';
import { Activate } from './containers/Activate/Loadable';

const { Content } = Layout;

export function App() {
  return (
    <>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/activate" component={Activate} />
        <React.Fragment>
          <FullHeightLayout>
            <SideMenu />
            <Layout>
              <AppHeader />
              <Content>
                <Route exact path="/dashboard" component={Dashboard} />
              </Content>
            </Layout>
          </FullHeightLayout>
        </React.Fragment>
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </>
  );
}

const FullHeightLayout = styled(Layout)`
  height: 100vh;
`;
