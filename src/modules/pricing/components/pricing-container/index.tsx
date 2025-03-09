import type { ReactNode } from "react";
import { Container } from "./styled";

interface PricingContainerProps {
	children: ReactNode;
}

const PricingContainer = ({ children }: PricingContainerProps) => {
	return <Container>{children}</Container>;
};

export default PricingContainer;
