import classNames from 'classnames/bind';
import styles from './BannerSlider.module.scss';

const cx = classNames.bind(styles);

function BannerSlider() {
    return (
        <aside className={cx('wrapper')}>
            <h2>BannerSlider Page</h2>
        </aside>
    );
}

export default BannerSlider;
