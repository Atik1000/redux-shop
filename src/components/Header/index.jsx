import React from 'react';
import Navigation from "../navigation"

const Header = ({cart}) => {
    return (
        <div>
       
            <Navigation cart={cart}/>
        </div>
    );
};

export default Header;