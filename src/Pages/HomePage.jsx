import DefaultLayout from "../components/layout/DefaultLayout"
import HomeHero from "../components/HomeHero"
import AboutUs from "../components/AboutUs"
import EventsList from "../components/EventsList"

export default function HomePage() {
    return <DefaultLayout>
        <HomeHero/>
        <AboutUs/>
        <EventsList/>
    </DefaultLayout>
}