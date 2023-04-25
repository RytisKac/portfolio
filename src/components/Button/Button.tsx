import React from 'react';
import styles from './Button.module.scss';

interface Props {
	href?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
	text: string;
	target?: string;
}

const Button = ({ href, onClick, text, target }: Props) => {
	return (
		<>
			{href ?
				<a href={href} className={styles.buttonLink} target={target}>{text}</a>
				:
				<button onClick={onClick} className={styles.button} >{text}</button>
			}
		</>
	)
}

export default Button