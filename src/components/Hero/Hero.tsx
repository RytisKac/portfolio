import React from 'react'
import styles from './Hero.module.scss';

const Hero = () => {
	return (
		<div className={styles.heroContainer}>
			<h1 className={styles.heroText}>
				Hi, I&apos;m <b>Rytis</b> - a web developer
			</h1>
		</div>
	)
}

export default Hero