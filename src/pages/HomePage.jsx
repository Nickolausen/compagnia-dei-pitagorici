import DefaultLayout from "../components/layout/DefaultLayout"
import HomeHero from "../components/HomeHero"
import AboutUs from "../components/AboutUs"
import EventsList from "../components/EventsList"
import PressReview from "../components/PressReview"
import HorizontalRule from "../components/HorizontalRule"

export default function HomePage() {
    return <DefaultLayout>
        <HomeHero/>
        <AboutUs/>
        <EventsList/>
        <HorizontalRule/>
        <PressReview/>
    </DefaultLayout>
}