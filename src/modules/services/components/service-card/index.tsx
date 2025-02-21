import OnViewAnimation from "@/components/common/on-view-animation";
import { ANIMATION_TEXT_CONFIG } from "@/config/animation";
import { Typography } from "@mui/material";
import Image from "next/image";
import { SERVICE_CARD_CLASSES } from "../../constants";
import { CardWrapper } from "./styled";

interface ServiceCardProps {
	title: string;
	imageSrc: string;
}

const { IMAGE_WRAPPER, TITLE_WRAPPER, TITLE } = SERVICE_CARD_CLASSES;
const { INITIAL, ANIMATE, TRANSITION } = ANIMATION_TEXT_CONFIG;
const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageSrc }) => {
	return (
		<OnViewAnimation>
			<CardWrapper>
				<div className={IMAGE_WRAPPER}>
					<Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
				</div>
				<div className={TITLE_WRAPPER}>
					<OnViewAnimation
						initial={INITIAL}
						animate={ANIMATE}
						transition={TRANSITION}
					>
						<Typography variant="h6" className={TITLE}>
							{title}
						</Typography>
					</OnViewAnimation>
				</div>
			</CardWrapper>
		</OnViewAnimation>
	);
};

export default ServiceCard;
