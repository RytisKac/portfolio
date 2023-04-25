import React from 'react';
import AboutMe from '../../assets/about-me.jpg';
import styles from './About.module.scss';
import Image from 'next/image';

const About = () => {
	return (
		<div className={styles.aboutContainer} id="about">
			<div className={styles.text}>
				<h1>About me</h1>
				<p>
					I have a bachelor&apos;s degree in Information Systems from KTU and
					currently work as a junior front-end developer at a fintech company.
					My day-to-day work involves using jamstack technologies, but I also
					enjoy working on my own projects and experimenting with new
					technology. My current focus is to improve my front-end skills and
					gradually expand my knowledge in back-end development.
				</p>
			</div>
			<div className={styles.image}>
				<Image src={AboutMe} alt="picture of roses" />
			</div>
		</div>
	);
};

export default About;
