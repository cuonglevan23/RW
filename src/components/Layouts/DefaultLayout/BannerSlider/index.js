import React from 'react';
import classNames from 'classnames/bind';
import styles from './BannerSlider.module.scss';

const cx = classNames.bind(styles);

function BannerSlider() {
    return (
        <div className={cx('banner-wrapper')}>
            <div className={cx('banner-slider')}>{/* Các slide trong Banner Slider */}</div>
        </div>
    );
}

export default BannerSlider;
