import React from 'react';
import {Link} from "react-router-dom";
import {HeaderContainer, NavList} from "../../style";

const Header = () => {
    return (
        <HeaderContainer>
            <NavList>
                <h1>React Posts</h1>
                <Link style={{color: 'white', textDecoration: 'none'}} to={'/'}>Home</Link>
            </NavList>

        </HeaderContainer>
    );
};

export default Header;
