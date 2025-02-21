import { REVIEWS } from "@/config/reviews";
import ReviewList from "./components/review-list";

const Reviews = () => {
	return <ReviewList reviews={REVIEWS} />;
};

export default Reviews;
