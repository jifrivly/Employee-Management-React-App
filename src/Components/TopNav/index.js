import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropType from 'prop-types';

import { ROUTES } from '../../Routes.constants';
// import style from './style.module.scss';

class TopNav extends Component {
    links = [
        { name: 'Dashboard', path: ROUTES.DASHBOARD },
        { name: 'Employees', path: ROUTES.EMPLOYEES },
        { name: 'Clients', path: ROUTES.CLIENTS },
        { name: 'Projects', path: ROUTES.PROJECTS },
        { name: 'Tasks', path: ROUTES.TASKS },
        { name: 'Calls', path: ROUTES.CALLS },
        { name: 'Contacts', path: ROUTES.CONTACTS },
        { name: 'Settings', path: ROUTES.SETTINGS },
    ];

    render() {
        return (
            <div className='navigation-block'>
                <ul>
                    {this.links.map((link, index) => (
                        <li key={index}>
                            <NavLink to={link.path} activeClassName='active'>
                                <span>{link.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default withRouter(TopNav);

TopNav.PropType = {
    className: PropType.string,
};
