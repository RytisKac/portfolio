import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';
import Image from 'next/image';
import styles from './Nav.module.scss';
import classNames from 'classnames';

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleClick = (id: string) => {
		const element = document.getElementById(id);
		if (menuOpen) setMenuOpen(false);

		if (element) {
			window.scrollTo({
				top: element.offsetTop - 50,
				behavior: 'smooth',
			});
		}
	};

	return (
		<header>
			<div className={styles.navContainer}>
				<div>
					<h1>Rytis.Dev</h1>
				</div>
				<div
					className={classNames(styles.hamburgerButton, {
						[styles.open]: menuOpen,
					})}
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<nav className={styles.navItems}>
					<ul>
						<li onClick={() => handleClick('about')} className={styles.link}>
							About
						</li>
						<li onClick={() => handleClick('projects')} className={styles.link}>
							Projects
						</li>
						<li onClick={() => handleClick('contact')} className={styles.link}>
							Contact
						</li>
					</ul>
				</nav>
			</div>
			<div
				className={classNames(styles.mobileMenu, {
					[styles.mobileMenuOpen]: menuOpen,
				})}
			>
				<ul className={styles.menu}>
					<li onClick={() => handleClick('about')} className={styles.link}>
						About
					</li>
					<li onClick={() => handleClick('projects')} className={styles.link}>
						Projects
					</li>
					<li onClick={() => handleClick('contact')} className={styles.link}>
						Contact
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Nav;
