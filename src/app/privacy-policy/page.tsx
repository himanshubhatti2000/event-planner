import ContentPage from "@/components/common/content-page";
import { ABOUT_US, PRIVACY_POLICY } from "@/config/content";
import React from "react";

const PrivacyPolicy = () => {
	return (
		<ContentPage title={PRIVACY_POLICY.TITLE} content={PRIVACY_POLICY.DESC} />
	);
};

export default PrivacyPolicy;
