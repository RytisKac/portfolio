import React, { useState } from 'react';
import styles from './Contact.module.scss';
import Button from '../Button/Button';

const Contact = () => {
	const [subject, setSubject] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const res = await fetch("/api/sendgrid", {
			body: JSON.stringify({
				subject: subject,
				email: email,
				message: message,
			}),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		const { error } = await res.json();

		if (error) {
			console.log(error);
			return;
		}
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.header}>Contact me</h1>
			<div className={styles.contactContainer}>
				<div className={styles.text}>
					<p>
						Thanks for checking out my portfolio! If you&apos;re interested in
						working together or have any questions, I&apos;d love to hear from
						you. You can get in touch with me by using the contact form.
					</p>
				</div>
				<form className={styles.fields}>
					<div className={styles.fieldGroup}>
						<label htmlFor="subject">Subject</label>
						<input
							type="text"
							name="subject"
							placeholder="Subject"
							value={subject}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								setSubject(e.target.value);
							}}
						/>
					</div>
					<div className={styles.fieldGroup}>
						<label htmlFor="subject">Email</label>
						<input
							type="email"
							name="Email"
							placeholder="Email"
							value={email}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								setEmail(e.target.value);
							}}
						/>
					</div>
					<div className={styles.fieldGroup}>
						<label htmlFor="subject">Message</label>
						<textarea
							name="subject"
							placeholder="Message"
							value={message}
							onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
								setMessage(e.target.value);
							}}
						/>
					</div>
					<Button text="Send" onClick={handleSubmit} />
				</form>
			</div>
		</div>
	);
};

export default Contact;
