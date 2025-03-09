import { EVENTS } from "@/config/events";
import { LINKS } from "@/constants";
import { StyledLink } from "@/styled";
import { Grid2 } from "@mui/material";
import React from "react";
import EventCard from "../event-card";

const EventList = () => {
	return (
		<Grid2 container spacing={2}>
			{EVENTS.map(({ id, title, imageSrc }) => (
				<Grid2 key={id} size={{ xs: 6, md: 4, lg: 3 }}>
					<StyledLink href={LINKS.CONTACTS.link}>
						<EventCard title={title} imageSrc={imageSrc} />
					</StyledLink>
				</Grid2>
			))}
		</Grid2>
	);
};

export default EventList;
