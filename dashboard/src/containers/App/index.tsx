import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';

import { ROUTE } from '../../utils/constants';
import MainLayout from '../../components/Layouts';

const SubmitScan = lazy(() => import('../SubmitScan'));
const CarsDashboard = lazy(() => import('../CarsDashboard'));
const CarsAvailability = lazy(() => import('../CarsAvailability'));
const UsersDashboard = lazy(() => import('../UsersDashboard'));
const SubmitUser = lazy(() => import('../SubmitUser'));
const Login = lazy(() => import('../Login'));

const Routes = () => {
  // const path = props?.location?.pathname
  return (
    <RecoilRoot>
      <ToastContainer />
      <BrowserRouter>
      <Switch>
        <Route
          component={Login}
          exact
          // layout={MainLayout}
          path="/"
        />
        <Route
          path="/admin/:path?"
          exact
        >
          <MainLayout>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route
                  component={CarsDashboard}
                  exact
                  // layout={MainLayout}
                  path={ROUTE.CarsDashboard}
                />
                <Route
                  component={UsersDashboard}
                  exact
                  // layout={MainLayout}
                  path={ROUTE.UsersDashboard}
                />
                <Route
                  component={CarsAvailability}
                  exact
                  // layout={MainLayout}
                  path={ROUTE.CarsAvailability}
                />
                <Route
                  component={SubmitScan}
                  exact
                  // layout={MainLayout}
                  path={ROUTE.SubmitScan}
                />
                <Route
                  component={SubmitUser}
                  exact
                  // layout={MainLayout}
                  path={ROUTE.SubmitUser}
                />
              </Switch>
            </Suspense>
          </MainLayout>
        </Route>
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Routes;
