import React, { useState } from 'react'
import Logo from '../../assets/Logo.png';
import Image from 'next/image';
import styles from './Nav.module.scss';
import classNames from 'classnames';

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<header>
			<div className={styles.navContainer}>
				<div>
					<Image src={Logo} alt="logo" width={100} height={100} />
				</div>
				<div className={classNames(styles.hamburgerButton, { [styles.open]: menuOpen })} onClick={() => setMenuOpen(!menuOpen)}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<nav className={styles.navItems}>
					<ul>
						<li>About</li>
						<li>Projects</li>
						<li>Contact</li>
					</ul>
				</nav>
			</div>
			<div className={classNames(styles.mobileMenu, { [styles.mobileMenuOpen]: menuOpen })}>
				<div>
					this is a menu
				</div>
			</div>
		</header >
	)
}

export default Nav