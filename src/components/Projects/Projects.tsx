import React from 'react'
import AboutMe from '../../assets/about-me.jpg';
import styles from './Projects.module.scss';
import Image from 'next/image';
type Props = {}

const Projects = (props: Props) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.header}>Projects</h1>
			<div className={styles.projectsContainer}>
				<div className={styles.projectContainer}>
					<div className={styles.text}>
						<h1>Project 1</h1>
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
				<div className={styles.projectContainer}>
					<div className={styles.text}>
						<h1>Project 2</h1>
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
				<div className={styles.projectContainer}>
					<div className={styles.text}>
						<h1>Project 3</h1>
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
			</div>
		</div>
	)
}

export default Projects