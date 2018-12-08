import React, { component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { isAutenticate, setAutenticate } from '../utils/loginManager';

import { Link, withRouter } from 'react-router-dom';

const Menu = (props) => {

    return (
        <Nav>
            <NavItem><Link className="nav-link" to="/">Home</Link></NavItem>
            <NavItem><Link className="nav-link" to="/tarefas">Tarefas</Link></NavItem>
            <NavItem><Link className="nav-link" to="/sobre">Sobre</Link></NavItem>
            {
                isAutenticate()
                    ? (
                        <NavItem>
                            <a href="#"
                                className="nav-link"
                                onClick={() => {
                                    setAutenticate(false);
                                    props.history.push('/');
                                }}>
                                Sair
                            </a>
                        </NavItem>
                    )
                    : (
                        <NavItem><Link className="nav-link" to="/login">Login</Link></NavItem>
                    )
            }

        </Nav>
    );
}

export default withRouter(Menu);