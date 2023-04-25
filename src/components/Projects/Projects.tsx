import React from 'react';
import AboutMe from '../../assets/about-me.jpg';
import Trackr from '../../assets/trackr.png';
import CryptoTracker from '../../assets/crypto-tracker.png';
import styles from './Projects.module.scss';
import Image from 'next/image';
import Button from '../Button/Button';
type Props = {};

const Projects = (props: Props) => {
	return (
		<div className={styles.container} id="projects">
			<h1 className={styles.header}>Projects</h1>
			<div className={styles.projectsContainer}>
				<div className={styles.projectContainer}>
					<div className={styles.text}>
						<h1>Crypto tracker</h1>
						<p>
							The Crypto Tracker website is a platform that utilizes the
							Coingecko API to display real-time cryptocurrency prices and
							market data.
							<br />
							<br />
							Built with: <b>Next.js, Typescript, SCSS</b>
						</p>
						<div className={styles.buttonsWrapper}>
							<Button text="Live site" href='https://crypto-tracker-haidrex.vercel.app/' target="_blank" />
							<Button text="Github" href='https://github.com/Haidrex/crypto-tracker' target="_blank" />
						</div>
					</div>
					<div className={styles.image}>
						<Image src={CryptoTracker} alt="picture of roses" />
					</div>
				</div>
				<div className={styles.projectContainer}>
					<div className={styles.text}>
						<h1>Trackr</h1>
						<p>
							Trackr was designed to help my brothers business track the work
							time of his employees. Employees can check in and check out using
							the app, and the system automatically records their work hours.
							<br />
							The system is also equipped with administrative tools that enable
							managers to oversee their team&apos;s work time, manage employee
							profiles, and export data into Excel spreadsheets
							<br />
							<br />
							Built with: <b>React.js, SCSS, Node.js, PostgreSQL, Prisma</b>
						</p>
						<div className={styles.buttonsWrapper}>
							<Button text="Github" href='https://github.com/Haidrex/trackr' target="_blank" />
						</div>
					</div>
					<div className={styles.image}>
						<Image src={Trackr} alt="picture of roses" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
