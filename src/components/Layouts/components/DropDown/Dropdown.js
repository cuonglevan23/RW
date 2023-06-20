import React from 'react';
import classNames from 'classnames/bind';
import styles from './Dropdown.module.scss';
import DropdownItem from './DropdownItem';
import { Crypto1, Crypto2, learn1 } from '~/components/Icons';
const cx = classNames.bind(styles);

function Dropdown({ dropdownType }) {
    const getDropdownContent = () => {
        switch (dropdownType) {
            case 'explore':
                return (
                    <>
                        <ul className={cx('dropdown-list')}>
                            <li className={cx('dropdown-list-item')}>
                                <DropdownItem>
                                    <Crypto1 className={cx('dropdown-icon')} />
                                    <div className={cx('dropdown-text-wrapper')}>
                                        <h4 className={cx('dropdown-head')}>Crypto</h4>
                                        <span className={cx('dropdown-text')}>View crypto prices and charts</span>
                                    </div>
                                </DropdownItem>
                            </li>
                            <li className={cx('dropdown-list-item')}>
                                <DropdownItem>
                                    <Crypto2 className={cx('dropdown-icon')} />
                                    <div className={cx('dropdown-text-wrapper')}>
                                        <h4 className={cx('dropdown-head')}>ENS Profiles</h4>
                                        <span className={cx('dropdown-text')}>Build your web3 presence today</span>
                                    </div>
                                </DropdownItem>
                            </li>
                        </ul>
                    </>
                );
            case 'learn':
                return (
                    <>
                        <div className={cx('colum-wrapper')}>
                            <ul className={cx('dropdown-list')}>
                                <li className={cx('dropdown-list-item')}>
                                    <DropdownItem>
                                        <span className={cx('inneritem-wrapper')}>
                                            <svg
                                                class={cx('chevron-icon')}
                                                width="8"
                                                height="11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z"
                                                    fill="#050F19"
                                                ></path>
                                            </svg>
                                            <div className={cx('wrapper-text')}>
                                                <span className={cx('text-headline')}>Tips & Tutorials</span>
                                            </div>
                                        </span>
                                    </DropdownItem>
                                </li>
                                <li className={cx('dropdown-list-item')}>
                                    <DropdownItem>
                                        <span className={cx('inneritem-wrapper')}>
                                            <svg
                                                class={cx('chevron-icon')}
                                                width="8"
                                                height="11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z"
                                                    fill="#050F19"
                                                ></path>
                                            </svg>
                                            <div className={cx('wrapper-text')}>
                                                <span className={cx('text-headline')}>Tips & Tutorials</span>
                                            </div>
                                        </span>
                                    </DropdownItem>
                                </li>
                                <li className={cx('dropdown-list-item')}>
                                    <DropdownItem>
                                        <span className={cx('inneritem-wrapper')}>
                                            <svg
                                                class={cx('chevron-icon')}
                                                width="8"
                                                height="11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z"
                                                    fill="#050F19"
                                                ></path>
                                            </svg>
                                            <div className={cx('wrapper-text')}>
                                                <span className={cx('text-headline')}>Tips & Tutorials</span>
                                            </div>
                                        </span>
                                    </DropdownItem>
                                </li>
                                <li className={cx('dropdown-list-item')}>
                                    <DropdownItem>
                                        <span className={cx('inneritem-wrapper')}>
                                            <svg
                                                class={cx('chevron-icon')}
                                                width="8"
                                                height="11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z"
                                                    fill="#050F19"
                                                ></path>
                                            </svg>
                                            <div className={cx('wrapper-text')}>
                                                <span className={cx('text-headline')}>Tips & Tutorials</span>
                                            </div>
                                        </span>
                                    </DropdownItem>
                                </li>
                                <li className={cx('dropdown-list-item')}>
                                    <DropdownItem>
                                        <span className={cx('inneritem-wrapper')}>
                                            <svg
                                                class={cx('chevron-icon')}
                                                width="8"
                                                height="11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z"
                                                    fill="#050F19"
                                                ></path>
                                            </svg>
                                            <div className={cx('wrapper-text')}>
                                                <span className={cx('text-headline')}>Tips & Tutorials</span>
                                            </div>
                                        </span>
                                    </DropdownItem>
                                </li>
                                <li className={cx('dropdown-list-item')}>
                                    <DropdownItem>
                                        <span className={cx('inneritem-wrapper')}>
                                            <svg
                                                class={cx('chevron-icon')}
                                                width="8"
                                                height="11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z"
                                                    fill="#050F19"
                                                ></path>
                                            </svg>
                                            <div className={cx('wrapper-text')}>
                                                <span className={cx('text-headline')}>Tips & Tutorials</span>
                                            </div>
                                        </span>
                                    </DropdownItem>
                                </li>
                                <li className={cx('dropdown-list-item')}>
                                    <DropdownItem>
                                        <span className={cx('inneritem-wrapper')}>
                                            <svg
                                                class={cx('chevron-icon')}
                                                width="8"
                                                height="11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z"
                                                    fill="#050F19"
                                                ></path>
                                            </svg>
                                            <div className={cx('wrapper-text')}>
                                                <span className={cx('text-headline')}>Tips & Tutorials</span>
                                            </div>
                                        </span>
                                    </DropdownItem>
                                </li>
                                <li className={cx('dropdown-list-item')}>
                                    <DropdownItem>
                                        <span className={cx('inneritem-wrapper')}>
                                            <svg
                                                class={cx('chevron-icon')}
                                                width="8"
                                                height="11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z"
                                                    fill="#050F19"
                                                ></path>
                                            </svg>
                                            <div className={cx('wrapper-text')}>
                                                <span className={cx('text-headline')}>Tips & Tutorials</span>
                                            </div>
                                        </span>
                                    </DropdownItem>
                                </li>
                                <li className={cx('dropdown-list-item')}>
                                    <DropdownItem>
                                        <span className={cx('inneritem-wrapper')}>
                                            <svg
                                                class={cx('chevron-icon')}
                                                width="8"
                                                height="11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z"
                                                    fill="#050F19"
                                                ></path>
                                            </svg>
                                            <div className={cx('wrapper-text')}>
                                                <span className={cx('text-headline')}>Tips & Tutorials</span>
                                            </div>
                                        </span>
                                    </DropdownItem>
                                </li>
                                <li className={cx('dropdown-list-item')}>
                                    <DropdownItem>
                                        <span className={cx('inneritem-wrapper')}>
                                            <svg
                                                class={cx('chevron-icon')}
                                                width="8"
                                                height="11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z"
                                                    fill="#050F19"
                                                ></path>
                                            </svg>
                                            <div className={cx('wrapper-text')}>
                                                <span className={cx('text-headline')}>Tips & Tutorials</span>
                                            </div>
                                        </span>
                                    </DropdownItem>
                                </li>
                            </ul>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return <div className={cx('dropdown')}>{getDropdownContent()}</div>;
}

export default Dropdown;
