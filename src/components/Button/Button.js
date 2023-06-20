import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button() {
    return (
        <div className={cx('action')}>
            <span className={cx('action-SignInLinktext')}>Sign In</span>
            <span className={cx('action-SignUp')}>
                <button className={cx('action-SignUp-btn')}>Get Started</button>
            </span>
        </div>
    );
}

export default Button;
