import { Services } from "@/config/services";
import { Grid } from "@mui/material";
import React from "react";
import ServiceCard from "../service-card";

const ServiceList = () => {
	return (
		<Grid container spacing={2}>
			{Services.map(({ id, title, imageSrc }) => (
				<Grid key={id} item xs={12} sm={6} lg={4}>
					<ServiceCard title={title} imageSrc={imageSrc} />
				</Grid>
			))}
		</Grid>
	);
};

export default ServiceList;
