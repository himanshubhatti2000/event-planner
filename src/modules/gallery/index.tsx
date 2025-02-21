import React from "react";
import ImageList from "./components/image-list";
import ImageView from "./components/image-view";

interface GalleryProps {
	activeImageId?: string;
	images: any;
}

const Gallery = ({ activeImageId, images }: GalleryProps) => {
	return (
		<>
			<ImageView image={activeImageId ? images[activeImageId] : null} />
			<ImageList imageToHideId={activeImageId} images={images} />
		</>
	);
};

export default Gallery;
export { ImageList };
