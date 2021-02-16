import React, { FunctionComponent } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout: FunctionComponent = ({ children }) => {
    return (
        <div className="container">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;