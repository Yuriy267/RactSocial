import React from 'react';
import sels from './Header.module.css';

const Header = () => {
    return (
        <header className={sels.header}>

            <img className={sels.logo} src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg" />

        </header>)
}

export default Header