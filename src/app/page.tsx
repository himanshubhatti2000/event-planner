import CustomWrapper from "@/components/common/custom-wrapper";
import Footer from "@/components/common/footer";
import Hero from "@/components/common/hero";
import SectionHeader from "@/components/common/section-header";
import FooterContainer from "@/components/home/footer-container";
import GalleryContent from "@/components/home/gallery-content";
import { heroData } from "@/config";
import { FOOTER_CONFIG } from "@/config/footer";
import { PRICING_DATA } from "@/config/pricing";
import { SECTION_CONSTANTS } from "@/constants/common";
import ContactUsForm from "@/modules/contact/components/contact-us-form";
import EventList from "@/modules/events/components/event-list";
import { PricingList } from "@/modules/pricing";
import PricingContainer from "@/modules/pricing/components/pricing-container";
import Reviews from "@/modules/reviews";
import ServiceList from "@/modules/services/components/service-list";

const { SERVICES, EVENTS, REVIEWS, CONTACT_US } = SECTION_CONSTANTS;
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
			<CustomWrapper isPaddingY variant="secondary" id={REVIEWS.ID}>
				<SectionHeader>{REVIEWS.TITLE}</SectionHeader>
				<Reviews />
			</CustomWrapper>
			<PricingContainer>
				<CustomWrapper isPaddingY>
					<PricingList pricingData={PRICING_DATA} />
				</CustomWrapper>
			</PricingContainer>
			<CustomWrapper isPaddingY id={CONTACT_US.ID}>
				<SectionHeader>{CONTACT_US.TITLE}</SectionHeader>
				<ContactUsForm />
			</CustomWrapper>

			<FooterContainer>
				<Footer
					brand={FOOTER_CONFIG.brand}
					links={FOOTER_CONFIG.links}
					copyright={FOOTER_CONFIG.copyright}
					socialMediaLinks={FOOTER_CONFIG.socialMediaLinks}
				/>
			</FooterContainer>
		</>
	);
}
