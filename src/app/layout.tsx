import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

	title: "habitud",
	description: "Application de suivi des habitudes.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

	const classes: string = cn(inter.className, "grainy")

	return (

		<html lang="fr">

			<body className={classes}>{children}</body>
		</html>
	);
}
