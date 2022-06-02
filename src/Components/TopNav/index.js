import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ROUTES } from '../../Routes.constants';
import PropType from 'prop-types';
import style from './style.module.scss';

function TopNav(props) {
  const handleLogout = () => {
    localStorage.clear();
    props.history.push(ROUTES.LOGIN);
  };
  return (
    <div className={style['nav-bar']}>
      <div className={style.navs}>
        <Link to={ROUTES.HOME}>
          Home
        </Link>
        <Link to={ROUTES.DETAILS}>
          Details
        </Link>
      </div>
      <div className={style['user-controls']}>
        <Link onClick={handleLogout}>
          Logout
        </Link>
      </div>
    </div>
  );
}

export default withRouter(TopNav);

TopNav.PropType = {
  className: PropType.string,
};
