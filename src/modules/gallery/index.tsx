import type { ImageObjType } from "@/@types";
import CustomWrapper from "@/components/common/custom-wrapper";
import React from "react";
import ImageList from "./components/image-list";
import ImageView from "./components/image-view";

interface GalleryProps {
	activeImageId?: string;
	images: ImageObjType;
}

const Gallery = ({ activeImageId, images }: GalleryProps) => {
	return (
		<>
			<ImageView image={activeImageId ? images[activeImageId] : undefined} />
			<CustomWrapper isPaddingY>
				<ImageList imageToHideId={activeImageId} images={images} />
			</CustomWrapper>
		</>
	);
};

export default Gallery;
export { ImageList };
