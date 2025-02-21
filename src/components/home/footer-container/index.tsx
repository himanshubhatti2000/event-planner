import React, { type ReactNode } from "react";
import { Wrapper } from "./styled";

interface FooterContainerProps {
	children: ReactNode;
}

const FooterContainer = ({ children }: FooterContainerProps) => {
	return <Wrapper variant="secondary">{children}</Wrapper>;
};

export default FooterContainer;
