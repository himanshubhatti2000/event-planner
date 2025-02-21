"use client";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FormWrapper = styled(Box)(({ theme }) => ({}));

export const MapBox = styled(Box)(({ theme }) => ({
	width: "100%",
	height: theme.spacing(48),
	backgroundColor: theme.palette.grey[200],
	borderRadius: theme.shape.borderRadius,
	boxShadow: theme.shadows[2],
}));
