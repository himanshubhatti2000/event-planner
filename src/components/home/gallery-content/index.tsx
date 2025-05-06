import OnViewAnimation from "@/components/common/on-view-animation";
import SectionHeader from "@/components/common/section-header";
import { ANIMATION_TEXT_CONFIG } from "@/config/animation";
import { images } from "@/config/gallery";
import { ImageList } from "@/modules/gallery";
import Grid from "@mui/material/Grid2";
import React from "react";
import { Para, StyledGrid } from "./styled";

const { INITIAL, ANIMATE, TRANSITION } = ANIMATION_TEXT_CONFIG;
const GalleryContent = () => {
	return (
		<StyledGrid container spacing={12}>
			<Grid size={{ xs: 12, md: 6 }}>
				<ImageList variant="small" images={images} />
			</Grid>

			<Grid size={{ xs: 12, md: 6 }}>
				<SectionHeader>Gallery</SectionHeader>
				<OnViewAnimation
					initial={INITIAL}
					animate={ANIMATE}
					transition={TRANSITION}
				>
					<Para>
						Explore our Gallery to see the magic of Dream Décor in action! Each
						setup is crafted with care, creativity, and attention to detail,
						ensuring a picture-perfect experience for you and your guests. Get
						inspired for your next event—your dream decor is just a call away!
					</Para>
				</OnViewAnimation>
			</Grid>
		</StyledGrid>
	);
};

export default GalleryContent;
