import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { GiAbstract005 } from 'react-icons/gi';
import classNames from 'classnames/bind';
import styles from './Navbar.scss';
import { Link } from 'react-router-dom';
import { Button } from './Button';

const cx = classNames.bind(styles);

function Navbar() {
    const [click, setClick] = useState();

    const handelClick = () => setClick(!click);
    const closeMenu = () => setClick();
    return (
        <>
            <div className={cx('wrapper-navbar')}>
                <Link
                    to="/"
                    className={cx('navbar-logo')}
                >
                    {
                        <GiAbstract005
                            className={cx(
                                'navbar-icon',
                            )}
                        />
                    }
                    TravelWorld
                </Link>
                <div
                    className={cx('menu-icon')}
                    onClick={handelClick}
                >
                    {click ? (
                        <FaTimes />
                    ) : (
                        <FaBars />
                    )}
                </div>
                <ul
                    className={
                        click
                            ? cx(
                                  'navbar-menu active',
                              )
                            : cx('navbar-menu')
                    }
                >
                    <li
                        className={cx(
                            'navbar-item',
                        )}
                    >
                        <Link
                            to="/"
                            className={cx(
                                'navbar-link',
                            )}
                            onClick={closeMenu}
                        >
                            {' '}
                            Home
                        </Link>
                    </li>
                    <li
                        className={cx(
                            'navbar-item',
                        )}
                    >
                        <Link
                            to="/products"
                            className={cx(
                                'navbar-link',
                            )}
                            onClick={closeMenu}
                        >
                            {' '}
                            Products
                        </Link>
                    </li>
                    <li
                        className={cx(
                            'navbar-item',
                        )}
                    >
                        <Link
                            to="/services"
                            className={cx(
                                'navbar-link',
                            )}
                            onClick={closeMenu}
                        >
                            {' '}
                            Services
                        </Link>
                    </li>
                    <li
                        className={cx(
                            'navbar-item',
                        )}
                    >
                        <Link
                            to="/contact"
                            className={cx(
                                'navbar-link',
                            )}
                            onClick={closeMenu}
                        >
                            {' '}
                            Contact
                        </Link>
                    </li>
                    <li
                        className={cx(
                            'navbar-item',
                        )}
                    >
                        <Link
                            to="/signUp"
                            className={cx(
                                'navbar-link',
                            )}
                            onClick={closeMenu}
                        >
                            {' '}
                            <Button buttonStyle="btn-primary">
                                SignUp
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
