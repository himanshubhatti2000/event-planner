import { Grid2 } from "@mui/material";
import React from "react";
import type { PricingListType } from "../../@types";
import PricingCard from "../pricing-card";
import { StyledGrid } from "./styled";

interface PricingListProps {
	pricingData: PricingListType;
}
const PricingList = ({ pricingData }: PricingListProps) => {
	const data = pricingData[0];
	return (
		<StyledGrid container spacing={0.5}>
			<Grid2 size={{ xs: 12, md: 6 }}>
				<PricingCard title={data.title} subtitle={data.subtitle} />
			</Grid2>
		</StyledGrid>
	);
};

export default PricingList;
