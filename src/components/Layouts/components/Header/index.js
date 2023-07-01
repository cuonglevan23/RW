import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faGear,
    faHeart,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
import NavBar from '~/components/Layouts/components/NavBar';
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu';
import CoinRW from '~/components/Popper/CoinRW/CoinRW';
import Notification from '~/components/Popper/Notification/Notification';
const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },

        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Recyclable waste" />
                </div>
                <NavBar />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <CoinRW>
                                <button className={cx('action-btn-heart')}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </button>
                            </CoinRW>
                            <Notification>
                                <button className={cx('action-btn-notifi')}>
                                    <FontAwesomeIcon icon={faBell} />
                                </button>
                            </Notification>

                            <Menu items={userMenu}>
                                <img
                                    src="https://khoinguonsangtao.vn/wp-content/uploads/2022/07/anh-avatar-facebook-nu-toc-dai-buoc-no.jpg"
                                    className={cx('user-avatar')}
                                    alt="Nguyen Van A"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button text>Sign In</Button>
                            <Button primary to="/login">
                                Get Started
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
