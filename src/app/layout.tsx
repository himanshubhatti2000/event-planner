import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/raleway";
import CustomWrapper from "@/components/common/custom-wrapper";
import Footer from "@/components/common/footer";
import FooterContainer from "@/components/home/footer-container";
import Nav from "@/components/nav";
import { FOOTER_CONFIG } from "@/config/footer";
import { ThemeProvider } from "@/context/ThemeContext";
import type { EmotionCache } from "@emotion/react"; // Add this
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";
import { Wrapper } from "./styled";

const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto",
});

export const metadata: Metadata = {
	title: "Dream Decor",
	description:
		"Transform your event with stunning balloon decorations, themed setups, floral arrangements, and more. From birthdays to bridal showers, we provide the best facilities to make your occasion unforgettable.",
	openGraph: {
		title: "Dream Decor",
		description:
			"Transform your event with stunning balloon decorations, themed setups, floral arrangements, and more.",
		url: "https://event-planner-navy-iota.vercel.app/",
		siteName: "Dream Decor",
		images: [
			{
				url: "https://event-planner-navy-iota.vercel.app/hero-bg.webp",
				width: 1200,
				height: 630,
				alt: "Dream Decor Event Decoration",
			},
		],
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
	value?: EmotionCache;
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
						<FooterContainer>
							<Footer
								brand={FOOTER_CONFIG.brand}
								links={FOOTER_CONFIG.links}
								copyright={FOOTER_CONFIG.copyright}
								socialMediaLinks={FOOTER_CONFIG.socialMediaLinks}
							/>
						</FooterContainer>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
