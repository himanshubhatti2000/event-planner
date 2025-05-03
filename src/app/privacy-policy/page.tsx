import ContentPage from "@/components/common/content-page";
import { PRIVACY_POLICY } from "@/config/content";
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import React from "react";
import { FaUserShield } from "react-icons/fa";
import { MdContactMail, MdInfoOutline, MdSecurity } from "react-icons/md";
import {
	ContentWrapper,
	SectionBox,
	SectionTitle,
	StyledItemIcon,
	StyledListItemIcon,
	StyledSectionIcon,
} from "./styled";

const sectionIconMap = {
	MdInfoOutline: MdInfoOutline,
	MdSecurity: MdSecurity,
	MdContactMail: MdContactMail,
	FaUserShield: FaUserShield,
};

const PrivacyPolicy = () => {
	return (
		<ContentPage
			title={PRIVACY_POLICY.title}
			content={
				<ContentWrapper>
					{/* Effective Date */}
					<Typography variant="subtitle2" color="text.secondary">
						Effective Date: {PRIVACY_POLICY.effectiveDate}
					</Typography>

					{/* Intro Paragraph */}
					<Typography component="div">{PRIVACY_POLICY.intro}</Typography>

					{/* Sections */}
					{PRIVACY_POLICY.sections.map((section) => {
						const SectionIcon =
							sectionIconMap[section.icon as keyof typeof sectionIconMap];
						return (
							<SectionBox key={section.title}>
								{/* Section Title */}
								<SectionTitle variant="h6" gutterBottom>
									{SectionIcon && (
										<StyledSectionIcon>
											<SectionIcon />
										</StyledSectionIcon>
									)}
									{section.title}
								</SectionTitle>

								{/* Section Content */}
								{section.items ? (
									<List dense>
										{section.items.map((item) => (
											<ListItem key={item}>
												<StyledListItemIcon>
													<StyledItemIcon>
														<FaUserShield /> {/* Single icon for all items */}
													</StyledItemIcon>
												</StyledListItemIcon>
												<ListItemText primary={item} />
											</ListItem>
										))}
									</List>
								) : (
									<Typography component="div">{section.content}</Typography>
								)}
							</SectionBox>
						);
					})}
				</ContentWrapper>
			}
		/>
	);
};

export default PrivacyPolicy;
