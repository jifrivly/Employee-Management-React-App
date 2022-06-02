import React, { Component, Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import TopNav from '../../Components/TopNav';
import Home from '../Home';
import Details from '../Details';
import PrivateRoute from '../../utils/PrivateRoute';

// import { Instances } from '../../api';

import { ROUTES } from '../../Routes.constants';

import style from './style.module.scss';

class MainFrame extends Component {
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
                <TopNav />
                <div className={style.container}>
                    <Switch>
                        <PrivateRoute path={ROUTES.HOME} component={Home} />
                        <PrivateRoute path={ROUTES.DETAILS} component={Details} />
                        <Redirect from={ROUTES.INDEX} to={ROUTES.HOME} />
                    </Switch>
                </div>
            </Fragment>
        );
    }
}
export default MainFrame;
