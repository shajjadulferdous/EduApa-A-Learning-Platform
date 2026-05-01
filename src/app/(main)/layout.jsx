import Footer from '@/Components/Footer';
import NavBar from '@/Components/NavBar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;