import SiteHeader from "@/components/all-components/site-header";
import Hero from "@/components/all-components/hero";
import About from "@/components/all-components/about";
import Gains from "@/components/all-components/gains";
import Speakers from "@/components/all-components/speakers";
import Agenda from "@/components/all-components/agenda";
import Moments from "@/components/all-components/moments";
import Venue from "@/components/all-components/venue";
import Registration from "@/components/all-components/registration";
import Faq from "@/components/all-components/faq";
import Footer from "@/components/all-components/footer";
import MotionController from "@/components/all-components/motion";
export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Gains />
        <Speakers />
        <Agenda />
        <Moments />
        <Venue />
        <Registration />
        <Faq />
      </main>
      <Footer />
      <MotionController />
    </>
  );
}
