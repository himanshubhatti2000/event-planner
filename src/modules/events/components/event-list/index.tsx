import { EVENTS } from "@/config/events";
import { Grid } from "@mui/material";
import React from "react";
import EventCard from "../event-card";

const EventList = () => {
	return (
		<Grid container spacing={2}>
			{EVENTS.map(({ id, title, imageSrc }) => (
				<Grid key={id} item xs={6} md={4} lg={3}>
					<EventCard title={title} imageSrc={imageSrc} />
				</Grid>
			))}
		</Grid>
	);
};

export default EventList;
