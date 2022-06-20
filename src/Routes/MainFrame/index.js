import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import TopNav from '../../Components/TopNav';
import PrivateRoute from '../../utils/PrivateRoute';

// import { Instances } from '../../api';

import { ROUTES } from '../../Routes.constants';

import style from './style.module.scss';
import { Employees } from '../Employees';
import { Clients } from '../Clients';
import { Dashboard } from '../Dashboard';
import { Projects } from '../Projects';
import { Tasks } from '../Tasks';
import { Settings } from '../Settings';
import { Contacts } from '../Contacts';
import { Calls } from '../Calls';
import Header from '../../Components/Header';

export class MainFrame extends Component {
    componentDidUpdate(prevProps, prevState) {
        // const { pathname } = this.props.location;
        /* to call all pending api call */
        // if (prevProps.location.pathname !== pathname) {
        //     Instances.map(instance => instance.cancelPending && instance.cancelPending());
        // }
    }

    render() {
        return (
            <Fragment>
                <div className='outer-wrapper'>
                    <Header />
                    <main className='content-wrapper'>
                        <aside className='content-wrapper__navigation'>
                            <TopNav />
                        </aside>
                        <section className='content-wrapper__body'>
                            {/* <div className={style.container}> */}
                            <Switch>
                                <PrivateRoute path={ROUTES.DASHBOARD} component={Dashboard} authed='' />
                                <PrivateRoute path={ROUTES.EMPLOYEES} component={Employees} authed='' />
                                <PrivateRoute path={ROUTES.CLIENTS} component={Clients} authed='' />
                                <PrivateRoute path={ROUTES.PROJECTS} component={Projects} authed='' />
                                <PrivateRoute path={ROUTES.TASKS} component={Tasks} authed='' />
                                <PrivateRoute path={ROUTES.CALLS} component={Calls} authed='' />
                                <PrivateRoute path={ROUTES.CONTACTS} component={Contacts} authed='' />
                                <PrivateRoute path={ROUTES.SETTINGS} component={Settings} authed='' />
                                <Redirect from={ROUTES.INDEX} to={ROUTES.DASHBOARD} />
                            </Switch>
                            {/* </div> */}
                        </section>
                    </main>
                </div>
            </Fragment>
        );
    }
}
