"use client";
import { Marker, Map as PigeonMap, ZoomControl } from "pigeon-maps";
import React from "react";

const MapComponent = () => {
	return (
		<PigeonMap
			height={400}
			defaultCenter={[44.3771144, -64.5249775]}
			defaultZoom={13}
			mouseEvents={false}
		>
			<Marker width={50} anchor={[44.3771144, -64.5249775]} />
			<ZoomControl />
		</PigeonMap>
	);
};

export default MapComponent;
