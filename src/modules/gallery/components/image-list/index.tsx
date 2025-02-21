
import Image from "next/image";
import Link from "next/link";
import { Item, StyledMasonry, Wrapper } from "./styled";

interface ImageListProps {
	images: any;
	variant?: "normal" | "small";
	imageToHideId?: string | null;
}
export default function ImageList({
	imageToHideId,
	images,
	variant = "normal",
}: ImageListProps) {
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
