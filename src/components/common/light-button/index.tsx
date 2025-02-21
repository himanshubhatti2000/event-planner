import type { ButtonProps } from "@mui/material";
import React from "react";
import { StyledButton } from "./styled";

const LightButton = (props: ButtonProps) => {
	return <StyledButton size="large" variant="outlined" {...props} />;
};

export default LightButton;
