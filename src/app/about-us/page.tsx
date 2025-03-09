import ContentPage from "@/components/common/content-page";
import { ABOUT_US } from "@/config/content";
import React from "react";

const AboutUs = () => {
	return <ContentPage title={ABOUT_US.TITLE} content={ABOUT_US.DESC} />;
};

export default AboutUs;
