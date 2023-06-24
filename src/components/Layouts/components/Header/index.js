import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCircleQuestion, faEarthAsia, faHeart, faKeyboard } from '@fortawesome/free-solid-svg-icons';

import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
import NavBar from '~/components/Layouts/components/NavBar';
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const currentUser = true;

    const userMenu = [];
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
                            <Tippy delay={[0, 50]} content="RW Coin" placement="bottom">
                                <button className={cx('action-btn-heart')}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Notification" placement="bottom">
                                <button className={cx('action-btn-notifi')}>
                                    <FontAwesomeIcon icon={faBell} />
                                </button>
                            </Tippy>
                            <Menu items={MENU_ITEMS}>
                                <img
                                    src="https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png"
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
