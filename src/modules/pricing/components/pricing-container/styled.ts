"use client";
import { styled } from "@mui/material";

const Container = styled("div")(({ theme }) => ({
	backgroundImage: `url('/pricing-bg.jpg')`,
	backgroundAttachment: "fixed",
	width: "100%",
	height: "100%",
}));

export { Container };
