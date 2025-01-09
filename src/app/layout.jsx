import '@/styles/globals.css';

import { Inter as Font } from 'next/font/google';
import { Navbar } from '@/components/navbar/navbar';

const font = Font({
	weight: ['400'],
	subsets: ['latin'],
	display: 'block',
	preload: true,
});

export const metadata = {
	title: 'App - Ingenio Indonesia',
	description: 'App for Internal',
};

export default function RootLayout({ children }) {
	return (
		<html lang='id' className='scroll-smooth'>
			<body className={font.className}>
				<main className='min-h-screen bg-white'>
					<Navbar />
					{children}
				</main>
			</body>
		</html>
	);
}
