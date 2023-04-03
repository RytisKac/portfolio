import React from 'react'
import ReactLogo from '../../assets/Logos/react.svg';
import SassLogo from '../../assets/Logos/sass.svg';
import TypescriptLogo from '../../assets/Logos/typescript.svg';
import NodeLogo from '../../assets/Logos/node.svg';
import styles from './Tech.module.scss';
import Image from 'next/image';

const Tech = () => {
	return (
		<div className={styles.techContainer}>
			<h1 className={styles.header}>Using these technologies</h1>
			<div className={styles.techLogos}>
				<Image src={ReactLogo} alt='React logo' />
				<Image src={SassLogo} alt='Sass logo' />
				<Image src={TypescriptLogo} alt='Typescript logo' />
				<Image src={NodeLogo} alt='Node.js logo' />
			</div>
		</div>
	)
}

export default Tech