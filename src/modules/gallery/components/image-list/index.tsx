"use client";
import { type ImageObjType, ImageType } from "@/@types";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Item, StyledMasonry, Wrapper } from "./styled";

interface ImageListProps {
	images: ImageObjType;
	variant?: "normal" | "small";
	imageToHideId?: string | null;
}
export default function ImageList({
	imageToHideId,
	images,
	variant = "normal",
}: ImageListProps) {
	const [isClientReady, setIsClientReady] = useState(false);

	useEffect(() => {
		// Ensure it runs only on client-side after styles are ready
		setIsClientReady(true);
	}, []);

	if (!isClientReady)
		return <Skeleton variant="rectangular" width="100%" height={600} />;

	return (
		<Wrapper variant={variant}>
			<StyledMasonry
				variant={variant}
				columns={{ xs: 2, sm: 3, md: 3 }}
				spacing={0.5}
			>
				{Object.values(images).map((image) => {
					const { url, id } = image;

					return (
						imageToHideId !== id && (
							<Link key={url} href={`/gallery/${id}`}>
								<Item>
									<Image
										src={url}
										alt="Image"
										objectFit="contain"
										width={200}
										height={200}
									/>
								</Item>
							</Link>
						)
					);
				})}
			</StyledMasonry>
		</Wrapper>
	);
}
