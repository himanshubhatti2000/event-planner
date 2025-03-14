import { motion } from "framer-motion";
import type React from "react";
import { StyledButton } from "./styled";

interface MenuToggleProps {
	toggle: () => void;
}

const Path = (props: React.ComponentProps<typeof motion.path>) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="hsl(0, 0%, 18%)"
		strokeLinecap="round"
		{...props}
	/>
);

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => (
	<StyledButton onClick={toggle}>
		<svg width="18" height="18" viewBox="0 0 23 23" aria-label="menu">
			<title>menu</title>
			<Path
				variants={{
					closed: { d: "M 2 2.5 L 20 2.5" },
					open: { d: "M 3 16.5 L 17 2.5" },
				}}
			/>
			<Path
				d="M 2 9.423 L 20 9.423"
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 },
				}}
				transition={{ duration: 0.1 }}
			/>
			<Path
				variants={{
					closed: { d: "M 2 16.346 L 20 16.346" },
					open: { d: "M 3 2.5 L 17 16.346" },
				}}
			/>
		</svg>
	</StyledButton>
);
