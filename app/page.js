import AboutDoctor from '@/components/AboutDoctor'
import Appointment from '@/components/Appointment'
import BeforeAfter from '@/components/BeforeAfter'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Location from '@/components/Location'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import React from 'react'
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Gallery from '@/components/Gallery'

const page = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <AboutDoctor />
                <Stats />
                <Services />
                <WhyChooseUs />
                <Gallery />
                <HowItWorks />
                <BeforeAfter />
                <Reviews />
                <Pricing />
                <FAQ />
                <Appointment />
                <Location />
            </main>
            <Footer />
            <WhatsAppCTA />
        </>
    )
}

export default page
