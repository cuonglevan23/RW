import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBaritem.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export const NavBarItem = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <li className={cx('nav-item')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href="#" className={cx('nav-link')}>
                {props.link}
            </a>
            {isHovered && <div className={cx('nav-menu')}>{props.children}</div>}
        </li>
    );
};
