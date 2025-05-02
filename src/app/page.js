import ChatbotSection from '@/components/chatbotsection/ChatbotSection'
import FAQSection from '@/components/faqsection/FAQSection'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import HeroSection from '@/components/herosection/HeroSection'
import CourseSection from '@/components/ourcoursessection/CourseSection'
import Reviews from '@/components/reviewsection/Reviews'

const page = () => {
	return (
		<div>
			<Header />
			<HeroSection />
			<ChatbotSection />
			<CourseSection />
			<FAQSection />
			<Reviews />
			<Footer />
		</div>
	)
}

export default page
