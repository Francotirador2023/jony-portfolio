import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-dark-bg text-dark-text flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Layout;
