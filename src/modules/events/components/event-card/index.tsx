import OnViewAnimation from "@/components/common/on-view-animation";
import {
	ANIMATION_TEXT_CONFIG,
	ANIMATION_TEXT_COVER_CONFIG,
} from "@/config/animation";
import { Typography } from "@mui/material";
import Image from "next/image";
import { EVENT_CARD_CLASSES } from "../../constants";
import { CardWrapper } from "./styled";

interface EventCardProps {
	title: string;
	imageSrc: string;
}

const { IMAGE_WRAPPER, TITLE_WRAPPER, TITLE } = EVENT_CARD_CLASSES;
const { INITIAL, ANIMATE, TRANSITION } = ANIMATION_TEXT_CONFIG;
const EventCard: React.FC<EventCardProps> = ({ title, imageSrc }) => {
	return (
		<OnViewAnimation>
			<CardWrapper>
				<div className={IMAGE_WRAPPER}>
					<Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
				</div>
				<OnViewAnimation
					initial={ANIMATION_TEXT_COVER_CONFIG.INITIAL}
					animate={ANIMATION_TEXT_COVER_CONFIG.ANIMATE}
					transition={ANIMATION_TEXT_COVER_CONFIG.TRANSITION}
				>
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
				</OnViewAnimation>
			</CardWrapper>
		</OnViewAnimation>
	);
};

export default EventCard;
