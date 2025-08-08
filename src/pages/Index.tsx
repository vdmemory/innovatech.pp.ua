import HeroSection from '@/components/HeroSection'
import BlogPosts from '@/components/BlogPosts'
import CalendarEmbed from '@/components/CalendarEmbed'
import WorkHighlights from '@/components/WorkHighlights'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import AboutUs from '@/components/AboutUs'
import Header from '@/components/Header.tsx'
import Footer from '@/components/Footer.tsx'

const Index = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[--header] text-foreground">
            <Header />
            <main>
                <HeroSection />
                <AboutUs />
                <BlogPosts />
                <WorkHighlights />
                <Testimonials />
                <FAQ />
                <CalendarEmbed />
            </main>
            <Footer />
        </div>
    )
}

export default Index
