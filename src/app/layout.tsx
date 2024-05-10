import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

	title: "habitud",
	description: "Application de suivi des habitudes.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

	return (

		<html lang="fr">

			<body className={inter.className}>{children}</body>
		</html>
	);
}
