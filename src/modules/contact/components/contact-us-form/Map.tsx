"use client";
import { Marker, Map as PigeonMap, ZoomControl } from "pigeon-maps";
import React from "react";

const MapComponent = () => {
	return (
		<PigeonMap
			height={400}
			defaultCenter={[40.7128, -74.006]}
			defaultZoom={13}
			mouseEvents={false}
		>
			<Marker width={50} anchor={[40.7128, -74.006]} />
			<ZoomControl />
		</PigeonMap>
	);
};

export default MapComponent;
