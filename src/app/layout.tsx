import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
	display: "swap"
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
	display: "swap"
});

export const metadata: Metadata = {
	title: "BEM - USU",
	description: "Kabinet Aksi Bersama BEM USU 2024/2025 - Kolaborasi Reformasi Untuk Kebermanfaatan Mahasiswa USU serta Masyarakat",
	metadataBase: new URL("http://localhost:3000") // Janlup ganti pas dah deploy
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="id">
			<head>
				<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar />

				<main className="min-h-[calc(100vh-10rem)]">
					{children}
				</main>

				<Footer />

			</body>
		</html>
	);
}
