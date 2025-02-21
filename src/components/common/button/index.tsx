import type React from "react";
import { ButtonWrapper } from "./styled";

interface ButtonProps {
	label: string;
	url: string;
}

const Button: React.FC<ButtonProps> = ({ label, url }) => {
	return <ButtonWrapper href={url}>{label}</ButtonWrapper>;
};

export default Button;
