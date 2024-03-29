import React from 'react';
import Trackr from '../../assets/trackr.png';
import CryptoTracker from '../../assets/crypto-tracker.png';
import Blog from '../../assets/blog.png';
import Todo from '../../assets/todo-app.png';
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
						<h2>Crypto tracker</h2>
						<p>
							The Crypto Tracker website is a platform that utilizes the
							Coingecko API to display real-time cryptocurrency prices and
							market data.
							<br />
							<br />
							Built with: <b>Next.js, Typescript, SCSS</b>
						</p>
						<div className={styles.buttonsWrapper}>
							<Button
								text="Live site"
								href="https://crypto-tracker-haidrex.vercel.app/"
								target="_blank"
							/>
							<Button
								text="Github"
								href="https://github.com/Haidrex/crypto-tracker"
								target="_blank"
							/>
						</div>
					</div>
					<div className={styles.image}>
						<Image src={CryptoTracker} alt="Crypto tracker screenshots" />
					</div>
				</div>
				<div className={styles.projectContainer}>
					<div className={styles.text}>
						<h2>Trackr</h2>
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
							<Button
								text="Github"
								href="https://github.com/Haidrex/trackr"
								target="_blank"
							/>
						</div>
					</div>
					<div className={styles.image}>
						<Image src={Trackr} alt="Trackr screenshots" />
					</div>
				</div>
				<div className={styles.projectContainer}>
					<div className={styles.text}>
						<h2>Blog app</h2>
						<p>
							Simple blog app with a custom CMS. The app allows users to create
							new blog posts, edit and delete them. The app also has a custom
							CMS with rich text editor, which allows the admin to manage the
							blog posts.
							<br />
							<br />
							Built with: <b>Laravel, Blade Templates, TailwindCSS, MySQL</b>
						</p>
						<div className={styles.buttonsWrapper}>
							<Button
								text="Github"
								href="https://github.com/RytisKac/blog-app"
								target="_blank"
							/>
						</div>
					</div>
					<div className={styles.image}>
						<Image src={Blog} alt="Blog app screenshots" />
					</div>
				</div>
				<div className={styles.projectContainer}>
					<div className={styles.text}>
						<h2>ToDo app</h2>
						<p>
							A simple todo list app which can be used to create new todo items,
							delete them, mark as done and filter.
							<br />
							<br />
							Built with: <b>React.js, Typescript, Styled components</b>
						</p>
						<div className={styles.buttonsWrapper}>
							<Button
								text="Live site"
								href="https://todo-app-zeta-sepia-14.vercel.app/"
								target="_blank"
							/>
							<Button
								text="Github"
								href="https://github.com/Haidrex/todo-app"
								target="_blank"
							/>
						</div>
					</div>
					<div className={styles.image}>
						<Image src={Todo} alt="Todo app screenshots" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
