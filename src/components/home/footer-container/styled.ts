"use client";
import CustomWrapper from "@/components/common/custom-wrapper";
import { styled } from "@mui/material";

const Wrapper = styled(CustomWrapper)(({ theme }) => ({
	padding: theme.spacing(12, 0),
	margin: theme.spacing(12, 0),
}));

export { Wrapper };
