import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';

import ROUTER_ITEMS from './routeItems';

const Router = () => (
  <Routes>
    {ROUTER_ITEMS.map(({ path, Component }, key) => (
      <Fragment key={key}>
        <Route path={path} Component={Component} />
      </Fragment>
    ))}

    <Route path='*' element={<NotFound />} />
  </Routes>
);

export default Router;
