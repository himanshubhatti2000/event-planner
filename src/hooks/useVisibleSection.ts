import { useEffect, useState } from "react";

type UseActiveSectionHook = (sectionIds: string[], offset?: number) => string;

const useActiveSection: UseActiveSectionHook = (sectionIds, offset = 0) => {
	const [activeSection, setActiveSection] = useState<string>("");

	useEffect(() => {
		const handleScroll = () => {
			let closestSection = "";
			let minDistance = Number.POSITIVE_INFINITY;

			for (const id of sectionIds) {
				const section = document.getElementById(id);
				if (section) {
					const rect = section.getBoundingClientRect();
					const distance = Math.abs(rect.top - offset);

					// Check if the section is in the viewport
					if (
						rect.bottom > 0 &&
						rect.top < window.innerHeight &&
						distance < minDistance
					) {
						minDistance = distance;
						closestSection = id;
					}
				}
			}

			setActiveSection(closestSection || "");
		};

		window.addEventListener("scroll", handleScroll);

		// Run initially to set the active section on load
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [sectionIds, offset]);

	return activeSection;
};

export default useActiveSection;
