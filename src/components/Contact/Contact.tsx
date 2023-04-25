import React, { useState } from 'react';
import styles from './Contact.module.scss';
import Button from '../Button/Button';
import { ValidateEmail } from '@/utils/validate';
import classNames from 'classnames';

const Contact = () => {
	const [subject, setSubject] = useState('');
	const [subjectError, setSubjectError] = useState<string | null>(null);
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState<string | null>(null);
	const [message, setMessage] = useState('');
	const [messageError, setMessageError] = useState<string | null>(null);

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (validateInput()) {
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
	}

	const validateInput = () => {
		setSubjectError(null);
		setEmailError(null);
		setMessageError(null);

		if (subject.length === 0) setSubjectError('This field is required');

		if (email.length === 0) setEmailError('This field is required');
		if (!ValidateEmail(email)) setEmailError('Invalid value');

		if (message.length === 0) setMessageError('This field is required');

		if (!subjectError || !emailError || !messageError) return true;
	}

	return (
		<div className={styles.container} id="contact">
			<h1 className={styles.header}>Contact me</h1>
			<div className={styles.contactContainer}>
				<div className={styles.text}>
					<p>
						Thanks for checking out my website! If you&apos;re interested in
						working together or have any questions, I&apos;d love to hear from
						you. You can get in touch with me by using the contact form.
					</p>
				</div>
				<form className={styles.fields}>
					<div className={classNames(styles.fieldGroup, { [styles.fieldError]: subjectError })}>
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
						{subjectError && <span className={styles.error}>{subjectError}</span>}
					</div>
					<div className={classNames(styles.fieldGroup, { [styles.fieldError]: emailError })}>
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
						{emailError && <span className={styles.error}>{emailError}</span>}
					</div>
					<div className={classNames(styles.fieldGroup, { [styles.fieldError]: messageError })}>
						<label htmlFor="subject">Message</label>
						<textarea
							name="subject"
							placeholder="Message"
							value={message}
							onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
								setMessage(e.target.value);
							}}
						/>
						{messageError && <span className={styles.error}>{messageError}</span>}
					</div>
					<Button text="Send" onClick={handleSubmit} />
				</form>
			</div>
		</div>
	);
};

export default Contact;
