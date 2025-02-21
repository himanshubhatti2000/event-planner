import { Grid } from "@mui/material";
import React from "react";
import type { Review } from "../../@types";
import ReviewCard from "../review-card";

interface ReviewListProps {
	reviews: Review[];
}
const ReviewList = ({ reviews }: ReviewListProps) => {
	return (
		<Grid container spacing={0.5}>
			{reviews?.map(({ imageAlt, imageSrc, rating, text, name }, index) => (
				<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
					<ReviewCard
						imageSrc={imageSrc}
						imageAlt={imageAlt}
						name={name}
						rating={rating}
						text={text}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default ReviewList;
