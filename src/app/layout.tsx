'use client';
import { Providers } from './Providers';
// import localFont from "next/font/local";
import './globals.css';
import { Provider } from 'react-redux';
import { store } from '@/store';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				style={{
					backgroundColor: '#F9F9F9',
				}} /*className={`${geistSans.variable} ${geistMono.variable}`}*/
			>
				<Provider store={store}>
					<Providers>{children}</Providers>
				</Provider>
			</body>
		</html>
	);
}
