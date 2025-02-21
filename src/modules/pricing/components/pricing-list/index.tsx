import { Grid } from "@mui/material";
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
			<Grid item xs={12} sm={6}>
				<PricingCard title={data.title} subtitle={data.subtitle} />
			</Grid>
		</StyledGrid>
	);
};

export default PricingList;
