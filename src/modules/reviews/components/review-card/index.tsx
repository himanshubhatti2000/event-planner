import { Box, Rating, Typography } from "@mui/material";
import Image from "next/image";
import { PiStar, PiStarFill } from "react-icons/pi";

import {
	CardContent,
	CardImage,
	CardWrapper,
	Name,
	ReviewText,
	Star,
	StarFill,
} from "./styled";

interface ReviewCardProps {
	imageSrc: string;
	imageAlt: string;
	name: string;
	rating: number;
	text: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
	imageSrc,
	imageAlt,
	name,
	rating,
	text,
}) => {
	return (
		<CardWrapper>
			<CardContent>
				<Box sx={{ marginRight: 2 }}>
					<CardImage>
						<Image
							src={imageSrc}
							alt={imageAlt}
							layout="fill"
							objectFit="cover"
						/>
					</CardImage>
				</Box>
				<div>
					<Name variant="h6">{name}</Name>
					<Rating
						icon={<StarFill />}
						emptyIcon={<Star />}
						name="read-only"
						value={rating}
						readOnly
					/>
				</div>
			</CardContent>
			<ReviewText variant="body1">{text}</ReviewText>
		</CardWrapper>
	);
};

export default ReviewCard;
