import React, { useState } from 'react';
import styles from './NavBaritem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const NavBarItem = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        props.onMouseEnter(props.dropdownType);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        props.onMouseLeave();
    };

    return (
        <li className={cx('nav-item')} onMouseEnter={handleMouseEnter}>
            <a href="#" className={cx('nav-link')}>
                {props.link}
            </a>
            {isHovered && (
                <div className={cx('nav-menu')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {props.children}
                </div>
            )}
        </li>
    );
};
