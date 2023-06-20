import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';
import Dropdown from '../DropDown/Dropdown';
import { NavBarItem } from './NavBarItem';
const cx = classNames.bind(styles);

function NavBar() {
    return (
        <nav className={cx('navbar')}>
            <ul className={cx('navbar-nav')}>
                <NavBarItem link="Explore">
                    <Dropdown dropdownType="explore" />
                </NavBarItem>
                <NavBarItem link="Learn">
                    <Dropdown dropdownType="learn" />
                </NavBarItem>
                <NavBarItem link="Product" />
                <NavBarItem link="Support" />
            </ul>
        </nav>
    );
}

export default NavBar;
