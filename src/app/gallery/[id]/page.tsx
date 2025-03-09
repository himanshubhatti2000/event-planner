import { images } from "@/config/gallery";
import Gallery from "@/modules/gallery";
import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	return <Gallery activeImageId={id} images={images} />;
};

export default Page;
