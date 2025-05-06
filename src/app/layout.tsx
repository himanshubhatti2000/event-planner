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
import { META_DATA } from "@/config";
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
	title: META_DATA.TITLE,
	description: META_DATA.DESCRIPTION,
	openGraph: {
		title: META_DATA.TITLE,
		description: META_DATA.DESCRIPTION,
		url: META_DATA.URL,
		siteName: META_DATA.TITLE,
		images: [
			{
				url: META_DATA.IMG_URL,
				width: 700,
				height: 462,
				alt: META_DATA.SUB_HEADLINE,
			},
		],
		type: META_DATA.TYPE,
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
