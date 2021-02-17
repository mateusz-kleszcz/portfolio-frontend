import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout: FunctionComponent = ({ children }) => {
    return (
        <>
            <Head>
                <link
                    rel='preload'
                    href='http://fonts.googleapis.com/css?family=Lato:400,700'
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <div className="container">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    );
};

export default Layout;