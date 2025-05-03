import { Typography } from "@mui/material";
import React, { type ReactElement } from "react";
import CustomWrapper from "../custom-wrapper";
import { ContentPageWrapper } from "./styled";

interface ContentPageProps {
	title: string;
	content: string | ReactElement;
}

const ContentPage = ({ title, content }: ContentPageProps) => {
	return (
		<ContentPageWrapper>
			<CustomWrapper isPaddingY>
				<Typography variant="h3" marginBottom={2.5}>
					{title}
				</Typography>

				{typeof content === "string" && (
					<Typography variant="body1">{content}</Typography>
				)}
				{typeof content !== "string" && content}
			</CustomWrapper>
		</ContentPageWrapper>
	);
};

export default ContentPage;
