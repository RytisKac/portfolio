import React from 'react'
import styles from './Contact.module.scss';

const Contact = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.header}>Contact</h1>
			<div className={styles.contactContainer}>
				<div className={styles.text}>
					<h1>Contact me</h1>
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
				<form className={styles.fields}>
					<div className={styles.fieldGroup}>
						<label htmlFor="subject">Subject</label>
						<input type="text" name="subject" placeholder='Subject' />
					</div>
					<div className={styles.fieldGroup}>
						<label htmlFor="subject">Email</label>
						<input type="email" name="Email" placeholder='Email' />
					</div>
					<div className={styles.fieldGroup}>
						<label htmlFor="subject">Message</label>
						<textarea name="subject" placeholder='Message' />
					</div>
					<button className={styles.button}>Send</button>
				</form>
			</div>
		</div>
	)
}

export default Contact