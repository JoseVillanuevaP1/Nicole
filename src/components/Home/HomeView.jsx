
import HomeComponentView from './HomeComponent/HomeComponentView'
import AboutView from './About/AboutView';
import ServicesView from './ServicesComponent/ServicesView';
import SkillsView from './Skills/SkillsView';
import FeatureView from './Features/FeatureView';
import StatsView from './Stats/StatsView';
// import BrandsView from './Brands/BrandsView';
import GalleryView from './Gallery/GalleryView';
import TestimonialsView from '/src/components/About/Testimonials/TestimonialsView'

export default function HomeView({ testimonial }) {
    return (
        <>
            <HomeComponentView />
            <AboutView />
            <ServicesView />
            <SkillsView />
            <FeatureView />
            <StatsView />
            <GalleryView />
            <TestimonialsView testimonial={testimonial} />
        </>
    )
}
