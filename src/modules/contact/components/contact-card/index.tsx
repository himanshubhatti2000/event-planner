import OnViewAnimation from "@/components/common/on-view-animation";
// src/components/ContactCard/index.tsx
import { Box, Typography } from "@mui/material";
import type { IconType } from "react-icons";
import { CardIcon, CardWrapper, ContactLink } from "./styled";

interface ContactCardBaseProps {
	title: string;
	value: string;
	icon: IconType;
}
interface ContactCardProps extends ContactCardBaseProps {
	href?: string;
}

const ContactCardBase: React.FC<ContactCardProps> = ({
	title,
	value,
	icon: Icon,
}) => {
	return (
		<OnViewAnimation>
			<CardWrapper>
				<CardIcon>
					<Icon />
				</CardIcon>
				<Box>
					<Typography variant="h6">{title}</Typography>
					<Typography variant="body1">{value}</Typography>
				</Box>
			</CardWrapper>
		</OnViewAnimation>
	);
};

const ContactCard: React.FC<ContactCardProps> = ({ href, ...props }) => {
	if (href)
		return (
			<ContactLink href={href}>
				<ContactCardBase {...props} />
			</ContactLink>
		);
	return <ContactCardBase {...props} />;
};

export default ContactCard;
