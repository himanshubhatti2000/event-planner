import CustomWrapper from "@/components/common/custom-wrapper";
import Hero from "@/components/common/hero";
import SectionHeader from "@/components/common/section-header";
import GalleryContent from "@/components/home/gallery-content";
import { heroData } from "@/config";
import { PRICING_DATA } from "@/config/pricing";
import { SECTION_CONSTANTS } from "@/constants/common";
import ContactUsForm from "@/modules/contact/components/contact-us-form";
import EventList from "@/modules/events/components/event-list";
import { PricingList } from "@/modules/pricing";
import PricingContainer from "@/modules/pricing/components/pricing-container";
import ServiceList from "@/modules/services/components/service-list";

const { SERVICES, EVENTS, CONTACT_US } = SECTION_CONSTANTS;
export default function Home() {
	return (
		<>
			<Hero {...heroData} />
			<CustomWrapper>
				<GalleryContent />
			</CustomWrapper>
			<CustomWrapper isPaddingY variant="secondary" id={SERVICES.ID}>
				<SectionHeader>{SERVICES.TITLE}</SectionHeader>
				<ServiceList />
			</CustomWrapper>
			<CustomWrapper isPaddingY variant="secondary" id={EVENTS.ID}>
				<SectionHeader>{EVENTS.TITLE}</SectionHeader>
				<EventList />
			</CustomWrapper>
			<CustomWrapper isPaddingY variant="secondary" id={CONTACT_US.ID}>
				<SectionHeader>{CONTACT_US.TITLE}</SectionHeader>
				<ContactUsForm />
			</CustomWrapper>
			<PricingContainer>
				<CustomWrapper isPaddingY>
					<PricingList pricingData={PRICING_DATA} />
				</CustomWrapper>
			</PricingContainer>
		</>
	);
}
