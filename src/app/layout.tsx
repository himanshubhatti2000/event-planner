import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/raleway";
import CustomWrapper from "@/components/common/custom-wrapper";
import Nav from "@/components/nav";
import { ThemeProvider } from "@/context/ThemeContext";
import { Wrapper } from "./styled";
import {  EmotionCache } from "@emotion/react"; // Add this
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	  weight: ['300', '400', '500', '700'],
	  subsets: ['latin'],
	  display: 'swap',
	  variable: '--font-roboto',
	});
	
export const metadata: Metadata = {
	title: "Dream Decor",
	description:
		"Transform your event with stunning balloon decorations, themed setups, floral arrangements, and more. From birthdays to bridal showers, we provide the best facilities to make your occasion unforgettable.",
};

export default function RootLayout({
	children,

}: Readonly<{
	children: React.ReactNode;
	value?: EmotionCache
}>) {
	return (
		<html lang="en">
			<body className={roboto.variable}>   
				<AppRouterCacheProvider>
					<ThemeProvider>
						<CustomWrapper>
							<Nav />
						</CustomWrapper>
						<Wrapper>{children}</Wrapper>
					</ThemeProvider>
					</AppRouterCacheProvider>
			</body>
		</html>
	);
}
