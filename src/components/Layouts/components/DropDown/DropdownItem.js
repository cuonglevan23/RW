import React from 'react';
import classNames from 'classnames/bind';
import styles from './Dropdownitem.module.scss';

const cx = classNames.bind(styles);

function DropdownItem(props) {
    return <div className={cx('dropdown-item')}>{props.children}</div>;
}

export default DropdownItem;
