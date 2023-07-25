import React from "react";
import { HeaderContainer, VerticalContainer } from "./styled";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <HeaderContainer>
            <VerticalContainer>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signin'>Sign in</Link>
                <Link to='/admin'>Admin</Link>
            </VerticalContainer>
        </HeaderContainer>
    )
}