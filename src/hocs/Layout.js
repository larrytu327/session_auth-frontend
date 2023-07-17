import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
  </Fragment>
);

export default Layout;
