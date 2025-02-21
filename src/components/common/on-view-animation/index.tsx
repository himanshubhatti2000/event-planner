"use client";
import type {
	AnimationProps,
	OnViewAnimationMode,
	Transition,
} from "@/@types/animation";
import { ANIMATION_DEFAULT_CONFIG } from "@/config/animation";
import { ON_VIEW_ANIMATION_MODES } from "@/constants/animation";
import { motion } from "framer-motion";
import {
	type CSSProperties,
	type ReactNode,
	useEffect,
	useRef,
	useState,
} from "react";

interface OnViewAnimationProps {
	children: ReactNode;
	initial?: AnimationProps;
	animate?: AnimationProps;
	transition?: Transition;
	threshold?: number;
	mode?: OnViewAnimationMode;
	className?: string;
	style?: CSSProperties;
}

const { DEFAULT, ONLY_FIRST_TIME } = ON_VIEW_ANIMATION_MODES;
const { INITIAL, ANIMATE, TRANSITION, THRESHOLD, MODE } =
	ANIMATION_DEFAULT_CONFIG;
const OnViewAnimation: React.FC<OnViewAnimationProps> = ({
	children,
	initial = INITIAL,
	animate = ANIMATE,
	transition = TRANSITION,
	threshold = THRESHOLD,
	mode = MODE,
	className = "",
	style = {},
}) => {
	const [inView, setInView] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				const isIntersecting = entry.isIntersecting;

				if (mode === ONLY_FIRST_TIME && isIntersecting) {
					setInView(true);
				} else if (mode === DEFAULT) {
					setInView(isIntersecting);
				}
			},
			{ threshold },
		);

		if (ref.current) observer.observe(ref.current);

		return () => observer.disconnect();
	}, [mode, threshold]);

	return (
		<motion.div
			ref={ref}
			initial={initial}
			animate={inView ? animate : initial}
			transition={transition}
			className={className}
			style={style}
		>
			{children}
		</motion.div>
	);
};

export default OnViewAnimation;
