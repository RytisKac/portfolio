import React from 'react';
import AboutMe from '../../assets/about-me.jpg';
import styles from './About.module.scss';
import Image from 'next/image';

const About = () => {
	return (
		<div className={styles.aboutContainer}>
			<div className={styles.text}>
				<h1>About me</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</p>
			</div>
			<div className={styles.image}>
				<Image src={AboutMe} alt="picture of roses" />
			</div>
		</div>
	);
};

export default About;
