import type { ImageType } from "@/@types";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { ImageContainer, NotFoundWrapper } from "./styled";

interface ImageViewProps {
	image?: ImageType;
}
const ImageView = ({ image }: ImageViewProps) => {
	return (
		<ImageContainer>
			{image && (
				<Image src={image.url} alt="Image" layout="fill" objectFit="contain" />
			)}
			{!image && (
				<NotFoundWrapper>
					<Typography variant="h3" textAlign="center">
						404
					</Typography>
					<Typography variant="body1" textAlign="center">
						Image not found
					</Typography>
				</NotFoundWrapper>
			)}
		</ImageContainer>
	);
};

export default ImageView;
