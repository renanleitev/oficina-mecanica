import React from "react";
import { HeaderContainer } from "./styled";
import { Link } from "react-router-dom";
import { Sidenav, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import UserIcon from '@rsuite/icons/legacy/User';
import UserPlusIcon from '@rsuite/icons/legacy/UserPlus';
import CartPlus from '@rsuite/icons/legacy/CartPlus';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

// https://rsuitejs.com/components/sidenav/

export default function SideBar() {
    const [expanded, setExpanded] = React.useState(false);
    return (
        <HeaderContainer>
            <Sidenav
                expanded={expanded}
                appearance="inverted"
                onMouseEnter={() => setExpanded(true)}
                onMouseLeave={() => setExpanded(false)}>
                <Sidenav.Body>
                    <Nav>
                        <Nav.Item icon={<HomeIcon />}>
                            <Link to='/'>Home</Link>
                        </Nav.Item>
                        <Nav.Item icon={<UserIcon />}>
                            <Link to='/login'>Login</Link>
                        </Nav.Item>
                        <Nav.Item icon={<UserPlusIcon />}>
                            <Link to='/signin'>Sign In</Link>
                        </Nav.Item>
                        <Nav.Item icon={<CartPlus />}>
                            <Link to='/'>Checkout</Link>
                        </Nav.Item>
                        <Nav.Menu
                            placement="rightStart"
                            title="Admin"
                            icon={<GearCircleIcon />}>
                            <Nav.Item><Link to='/admin/employees'>Employees</Link></Nav.Item>
                            <Nav.Item><Link to='/admin/products'>Products</Link></Nav.Item>
                            <Nav.Item><Link to='/admin/requests'>Requests</Link></Nav.Item>
                            <Nav.Item><Link to='/admin/users'>Users</Link></Nav.Item>
                        </Nav.Menu>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </HeaderContainer>
    )
}