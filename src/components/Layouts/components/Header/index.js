import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import NavBar from '~/components/Layouts/components/NavBar';
import Button from '~/components/Button/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Recyclable waste" />
                </div>
                <NavBar />
                <div className={cx('action')}>
                    <Button />
                </div>
            </div>
        </header>
    );
}

export default Header;
