import React from 'react'
import styles from './Hero.module.scss';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
	return (
		<div className={styles.heroContainer}>
			<TypeAnimation sequence={["Hi, I'm Rytis - a web developer"]} wrapper='h1' style={{
				textAlign: 'center',
				fontWeight: '300',
				fontSize: 'clamp(1.5rem, 0.4138rem + 6.2069vw, 5rem)',
				paddingBottom: '10rem'
			}}
				cursor={false} />
		</div>
	)
}

export default Hero