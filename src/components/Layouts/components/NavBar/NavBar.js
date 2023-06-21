import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';
import Dropdown from '~/components/Layouts/components/DropDown';
import { NavBarItem } from './NavBarItem';

const cx = classNames.bind(styles);

function NavBar() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleDropdownOpen = (dropdownType) => {
        setActiveDropdown(dropdownType);
    };

    const handleDropdownClose = () => {
        setActiveDropdown(null);
    };

    return (
        <nav className={cx('navbar')}>
            <ul className={cx('navbar-nav')}>
                <NavBarItem
                    link="Explore"
                    dropdownType="explore"
                    onMouseEnter={handleDropdownOpen}
                    onMouseLeave={handleDropdownClose}
                >
                    {activeDropdown === 'explore' && <Dropdown dropdownType="explore" />}
                </NavBarItem>
                <NavBarItem
                    link="Learn"
                    dropdownType="learn"
                    onMouseEnter={handleDropdownOpen}
                    onMouseLeave={handleDropdownClose}
                >
                    {activeDropdown === 'learn' && <Dropdown dropdownType="learn" />}
                </NavBarItem>
                <NavBarItem
                    link="Product"
                    dropdownType="product"
                    onMouseEnter={handleDropdownOpen}
                    onMouseLeave={handleDropdownClose}
                >
                    {activeDropdown === 'product' && <Dropdown dropdownType="product" />}
                </NavBarItem>
                <NavBarItem
                    link="Support"
                    dropdownType="support"
                    onMouseEnter={handleDropdownOpen}
                    onMouseLeave={handleDropdownClose}
                >
                    {activeDropdown === 'support' && <Dropdown dropdownType="support" />}
                </NavBarItem>
            </ul>
            <div className={cx('dropdown-overlay')} onClick={handleDropdownClose} />
        </nav>
    );
}

export default NavBar;
