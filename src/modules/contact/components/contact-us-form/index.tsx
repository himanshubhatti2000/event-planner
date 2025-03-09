import { CONTACT_INFO } from "@/config/contact";
import { Box, Grid2, Skeleton } from "@mui/material";
import React, { Suspense } from "react";
import ContactCard from "../contact-card";
import { FormWrapper, MapBox } from "./styled";
const LazyMapComponent = React.lazy(() => import("./Map"));

const ContactUsForm: React.FC = () => {
	return (
		<FormWrapper>
			<Grid2 container spacing={0.5}>
				<Grid2 size={{ xs: 12, md: 6 }}>
					{CONTACT_INFO.map((info) => (
						<Box key={info.title} mb={2}>
							<ContactCard
								title={info.title}
								value={info.value}
								icon={info.icon}
								href={info.href}
							/>
						</Box>
					))}
				</Grid2>
				<Grid2 size={{ xs: 12, md: 6 }}>
					<MapBox>
						<Suspense fallback={<Skeleton width="100%" height={400} />}>
							<LazyMapComponent />
						</Suspense>
					</MapBox>
				</Grid2>
			</Grid2>
		</FormWrapper>
	);
};

export default ContactUsForm;
