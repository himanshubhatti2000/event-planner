import { Typography } from "@mui/material";
import React from "react";
import CustomWrapper from "../custom-wrapper";
import { ContentPageWrapper } from "./styled";

interface ContentPageProps {
	title: string;
	content: string;
}

const ContentPage = ({ title, content }: ContentPageProps) => {
	return (
		<ContentPageWrapper>
			<CustomWrapper isPaddingY>
				<Typography variant="h3" marginBottom={2.5}>
					{title}
				</Typography>
				<Typography variant="body1">{content}</Typography>
			</CustomWrapper>
		</ContentPageWrapper>
	);
};

export default ContentPage;
