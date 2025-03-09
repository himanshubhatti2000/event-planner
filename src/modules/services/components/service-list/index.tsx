import { Services } from "@/config/services";
import { LINKS } from "@/constants";
import { StyledLink } from "@/styled";
import { Grid2 } from "@mui/material";
import React from "react";
import ServiceCard from "../service-card";

const ServiceList = () => {
	return (
		<Grid2 container spacing={2}>
			{Services.map(({ id, title, imageSrc }) => (
				<Grid2 key={id} size={{ xs: 12, sm: 6, lg: 4 }}>
					<StyledLink href={LINKS.CONTACTS.link}>
						<ServiceCard title={title} imageSrc={imageSrc} />
					</StyledLink>
				</Grid2>
			))}
		</Grid2>
	);
};

export default ServiceList;
