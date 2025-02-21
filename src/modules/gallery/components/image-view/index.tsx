import type { ImageType } from "@/@types";
import Image from "next/image";
import React from "react";
import { ImageContainer } from "./styled";

interface ImageViewProps {
	image?: ImageType;
}
const ImageView = ({ image }: ImageViewProps) => {
	return (
		image && (
			<ImageContainer>
				<Image src={image.url} alt="Image" layout="fill" objectFit="contain" />
			</ImageContainer>
		)
	);
};

export default ImageView;
