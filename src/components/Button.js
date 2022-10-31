import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.scss';
console.log(styles);

const cx = classNames.bind(styles);

const STYLES = ['btn-primary', 'btn-outline'];
const SIZES = ['btn-medium', 'btn-large', 'btn-mobile'];
const COLOR = ['primary', 'red', 'green'];
export const Button = ({ children, type, onClick, buttonStyle, buttonSize, buttonColor }) => {
    const checkButtonSTyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : STYLES[0];
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : STYLES[0];

    return (
        <button
            className={cx(`btn ${checkButtonSTyle} ${checkButtonSize} ${checkButtonColor}`)}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};
