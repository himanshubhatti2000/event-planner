import { CONTACT_INFO } from "@/config/contact";
import { Box, Grid } from "@mui/material";
// src/components/ContactUsForm/index.tsx
import type React from "react";
import ContactCard from "../contact-card";
import { FormWrapper, MapBox } from "./styled";
import MapComponent from "./Map";
// import Map from "./Map";

const ContactUsForm: React.FC = () => {
	return (
		<FormWrapper>
			<Grid container spacing={0.5}>
				<Grid item xs={12} md={6}>
					{CONTACT_INFO.map((info, index) => (
						<Box key={index} mb={2}>
							<ContactCard
								title={info.title}
								value={info.value}
								icon={info.icon}
								href={info.href}
							/>
						</Box>
					))}
				</Grid>
				<Grid item xs={12} md={6}>
					<MapBox>
					 <MapComponent/>
					</MapBox>
				</Grid>
			</Grid>
		</FormWrapper>
	);
};

export default ContactUsForm;
