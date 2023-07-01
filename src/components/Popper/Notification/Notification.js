import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Notification.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Notification({ children, items, hideOnClick, onChange }) {
    const renderItems = () => {
        if (items && items.length > 0) {
            return (
                <>
                    {items.map((item, index) => (
                        <div className={cx('item')} key={index}>
                            {item}
                        </div>
                    ))}
                </>
            );
        } else {
            return <div className={cx('item')}>Chưa có thông báo nào</div>;
        }
    };

    const handleClick = () => {
        if (hideOnClick) {
            // Xử lý logic ẩn thông báo khi click (nếu cần)
        }
        if (onChange) {
            onChange();
        }
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs} onClick={handleClick}>
            <PopperWrapper className={cx('menu-popper')}>
                <h4 className={cx('header')}>Thông Báo</h4>

                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    return (
        <Tippy interactive offset={[12, 8]} trigger="click" placement="bottom-end" render={renderResult}>
            {children}
        </Tippy>
    );
}

Notification.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Notification;
