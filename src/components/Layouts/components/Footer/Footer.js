import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('footer-content')}>
                    <div className={cx('footer-left')}>
                        <div className={cx('left-brand')}>
                            <img src={images.img} alt="Recyclable waste" className={cx('brand-img')} />

                            <div className={cx('brand-info')}>
                                <div className={cx('brand-info-copyright')}>© 2023 Coinbase</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
