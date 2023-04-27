import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Index.module.scss';
import Nav from '@/components/Nav/Nav';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Tech from '@/components/Tech/Tech';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Rytis | Web developer portfolio</title>
				<meta
					name="description"
					content="As a web developer, I specialize in creating custom and responsive websites. Take a look at my portfolio to see how I can help you bring your vision to life."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.container}>
				<Nav />
				<Hero />
				<About />
				<Tech />
				<Projects />
				<Contact />
			</main>
		</>
	);
}
