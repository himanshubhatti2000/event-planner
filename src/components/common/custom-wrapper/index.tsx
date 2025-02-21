import React, { type ReactNode } from "react";
import { Content, Wrapper } from "./styled";

interface CustomWrapperProps {
	children: ReactNode;
	variant?: "primary" | "secondary";
	isPaddingY?: boolean;
	id?: string;
}
const CustomWrapper = ({
	children,
	isPaddingY = false,
	variant = "primary",
	id = "",
}: CustomWrapperProps) => {
	return (
		<Wrapper variant={variant} isPaddingY={isPaddingY} id={id}>
			<Content>{children}</Content>
		</Wrapper>
	);
};

export default CustomWrapper;
