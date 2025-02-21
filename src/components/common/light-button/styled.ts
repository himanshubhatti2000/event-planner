"use client";
import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
	borderColor: theme.palette.grey[50],
	color: theme.palette.grey[50],
}));
