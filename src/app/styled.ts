"use client";
import { styled } from "@mui/material";

const Wrapper = styled("div")(({ theme }) => ({
	marginTop: "75px",
	[theme.breakpoints.down("md")]: {
		marginTop: "50px",
	},
}));

export { Wrapper };
