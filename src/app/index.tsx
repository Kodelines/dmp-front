/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Layout } from 'antd';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from 'styles/global-styles';

import { AppHeader } from './components/AppHeader';
// import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { SideMenu } from './components/SideMenu';
import { Activate } from './containers/Activate/Loadable';
import { CreateUser } from './containers/CreateUser/Loadable';
import { Dashboard } from './containers/Dashboard/Loadable';
import { DoctorsList } from './containers/DoctorsList/Loadable';
import { ExaminationDetails } from './containers/ExaminationDetails/Loadable';
import { HospitalisationDetails } from './containers/HospitalisationDetails/Loadable';
import { Login } from './containers/Login/Loadable';
import { MyPatients } from './containers/MyPatients/Loadable';
import { NewConsultation } from './containers/NewConsultation/Loadable';
import { NewExamination } from './containers/NewExamination/Loadable';
import { NewHospitalisation } from './containers/NewHospitalisation/Loadable';
import { Profile } from './containers/Profile/Loadable';
import { Register } from './containers/Register/Loadable';
import { UploadUserDoc } from './containers/UploadUserDoc/Loadable';
import { UserFile } from './containers/UserFile/Loadable';

const { Content } = Layout;

export function App() {
  return (
    <>
      <Helmet titleTemplate="%s - DMP" defaultTitle="DMP">
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
                <Route exact path="/adduser" component={CreateUser} />
                <Route exact path="/uploaddoc" component={UploadUserDoc} />
                <Route exact path="/userfile/:id" component={UserFile} />
                <Route
                  exact
                  path="/userfile/:userId/examination/:id"
                  component={ExaminationDetails}
                />
                <Route
                  exact
                  path="/userfile/:userId/add-examination"
                  component={NewExamination}
                />
                <Route
                  exact
                  path="/userfile/:userId/hospitalisation/:id"
                  component={HospitalisationDetails}
                />
                <Route
                  exact
                  path="/userfile/:userId/add-hospitalisation"
                  component={NewHospitalisation}
                />
                <Route
                  exact
                  path="/userfile/:userId/consultation/add"
                  component={NewConsultation}
                />
                <Route exact path="/doctors" component={DoctorsList} />
                <Route exact path="/mypatients" component={MyPatients} />
                <Route exact path="/profile" component={Profile} />
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
