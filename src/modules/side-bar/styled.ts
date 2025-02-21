import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const StyledNav = styled("nav")({
	position: "absolute",
	top: 0,
	left: 0,
	bottom: 0,
	width: "300px",
});

export const Background = styled(motion.div)(({ theme }) => ({
	position: "absolute",
	top: 0,
	left: 0,
	bottom: 0,
	width: "300px",
	background: theme.palette.primary.light,
	height: "100vh",
	overflow: "auto",
}));

export const StyledButton = styled("button")({
	outline: "none",
	border: "none",
	userSelect: "none",
	cursor: "pointer",
	position: "absolute",
	top: "5px",
	left: "10px",
	width: "50px",
	height: "50px",
	borderRadius: "50%",
	background: "transparent",
});

export const StyledUl = styled(motion.ul)({
	margin: 0,
	padding: "25px",
	position: "absolute",
	left: 0,
	top: "100px",
	width: "230px",
});

export const StyledLi = styled(motion.li)({
	listStyle: "none",
	marginBottom: "20px",
	alignItems: "center",
	cursor: "pointer",
});

export const RefreshButton = styled("div")({
	padding: "10px",
	position: "absolute",
	background: "rgba(0, 0, 0, 0.4)",
	borderRadius: "10px",
	width: "20px",
	height: "20px",
	top: "10px",
	right: "10px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	cursor: "pointer",
});
