import { images } from "@/config/gallery";
import Gallery from "@/modules/gallery";
import React from "react";

const Page = ({ params: { id } }: { params: { id: string } }) => {
	return <Gallery activeImageId={id} images={images} />;
};

export default Page;
