import React from 'react';
import PropType from 'prop-types';

import { ROUTES } from '../../Routes.constants';
import style from './style.module.scss';
import icons from '../../../public/manifest.json';

function Header(props) {
    const handleLogout = () => {
        localStorage.clear();
        props.history.push(ROUTES.LOGIN);
    };

    return (
        <div className={style['nav-bar']}>
            <header className='main-header'>
                <div className='main-header__logo'>
                    <img src={icons.icons[1].src} />
                </div>
                <div className='main-header__signout'>
                    <a>
                        <span className='image'>
                            <img src={icons.icons[4].src} alt='imager' />
                        </span>
                        <span onClick={handleLogout}>Logout</span>
                    </a>
                </div>
            </header>
        </div>
    );
}

export default Header;
// export default withRouter(Header);

Header.PropType = {
    className: PropType.string,
};
