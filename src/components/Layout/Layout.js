import React from 'react';
import Header from '../Header/Header';
import Helmet from "react-helmet";

export default ({ children }) => (
    <>
        <Helmet>
            <title>筑波大学</title>
        </Helmet>
        <Header />
        <div className="page-body">
            {children}
        </div>
    </>
);