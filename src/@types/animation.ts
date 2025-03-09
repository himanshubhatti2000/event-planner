import type { ON_VIEW_ANIMATION_MODES } from "@/constants/animation";

type AnimationProps = {
	opacity?: number;
	y?: number;
	x?: number;
};

type Transition = {
	duration?: number;
	ease?: string | number[];
	delay?: number;
};

type OnViewAnimationMode =
	(typeof ON_VIEW_ANIMATION_MODES)[keyof typeof ON_VIEW_ANIMATION_MODES];

export type { AnimationProps, Transition, OnViewAnimationMode };
