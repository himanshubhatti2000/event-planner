"use client";
import { MAP_COORDINATES, getMapUrl } from "@/config/contact";
import { Marker, Map as PigeonMap, ZoomControl } from "pigeon-maps";
import React from "react";
import { MapContainer } from "./styled";

const MapComponent = () => {
	const { LAT, LNG } = MAP_COORDINATES;

	const openInMaps = () => {
		const url = getMapUrl(LAT, LNG);
		window.open(url, "_blank");
	};

	return (
		<MapContainer onClick={openInMaps} onKeyDown={openInMaps}>
			<PigeonMap
				height={400}
				defaultCenter={[LAT, LNG]}
				defaultZoom={13}
				mouseEvents={false}
				touchEvents={false}
				zoomSnap={false}
			>
				<Marker width={50} anchor={[LAT, LNG]} />
				<ZoomControl />
			</PigeonMap>
		</MapContainer>
	);
};

export default MapComponent;
