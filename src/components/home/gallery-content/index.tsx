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
				<SectionHeader>Lorem Ipsum</SectionHeader>
				<OnViewAnimation
					initial={INITIAL}
					animate={ANIMATE}
					transition={TRANSITION}
				>
					<Para>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
						mauris ut mauris posuere posuere. Nullam vel sem eget tortor
						pulvinar ultrices. Integer vel felis dui. Aliquam ac mauris lectus.
						Etiam laoreet eget ipsum a tempus. Etiam in ex vitae nibh sodales
						ullamcorper. Pellentesque vitae tortor facilisis, pretium nunc sed,
						molestie erat. Aenean ullamcorper erat at ligula volutpat, at
						viverra nibh varius. Vestibulum malesuada vitae lectus in fermentum.
						Integer quis eleifend est, non ultrices elit. Fusce sed est feugiat,
						faucibus velit ut, tempor turpis. Proin dapibus elit varius,
						imperdiet eros nec, sagittis diam. Vestibulum malesuada mauris
						fringilla velit pulvinar, eu tristique massa pretium. Quisque mattis
						orci a magna dictum, congue mollis justo maximus. Ut commodo
						sollicitudin elit ac ultrices.
					</Para>
				</OnViewAnimation>
			</Grid>
		</StyledGrid>
	);
};

export default GalleryContent;
