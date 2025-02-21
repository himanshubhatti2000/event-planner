import type { FooterConfig } from "@/@types/footer";
import { Link, Tooltip, Typography } from "@mui/material";
import type React from "react";
import Logo from "../logo";
import {
	BottomContainer,
	FlexContainer,
	FooterDivider,
	LinksContainer,
	SocialMediaLinkContainer,
	Wrapper,
} from "./styled";

const Footer: React.FC<FooterConfig> = ({
	links,
	copyright,
	socialMediaLinks,
}) => {
	return (
		<Wrapper>
			<FlexContainer>
				<Logo />
				<LinksContainer>
					{links.map((link, index) => (
						<Link href={link.href} key={index} underline="hover">
							{link.text}
						</Link>
					))}
				</LinksContainer>
			</FlexContainer>

			<FooterDivider />
			<BottomContainer>
				<Typography variant="body2">
					&copy; {copyright.year}
					<Link href={copyright.href}>{copyright.text}</Link>
				</Typography>
				<SocialMediaLinkContainer>
					{socialMediaLinks.map(({ href, title, icon: Icon }) => (
						<Link href={href} key={title} underline="hover">
							<Tooltip title={title}>
								<Icon />
							</Tooltip>
						</Link>
					))}
				</SocialMediaLinkContainer>
			</BottomContainer>
		</Wrapper>
	);
};

export default Footer;
