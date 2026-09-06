import CoreServices from "@/components/landing_page/CoreServices";
import Footer from "@/components/landing_page/Footer";
import Header from "@/components/landing_page/Header";
import Hero from "@/components/landing_page/Hero";
import Steps from "@/components/landing_page/Steps";
import Testimony from "@/components/landing_page/Testimony";
import WhyFambrood from "@/components/landing_page/WhyFambrood";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyFambrood />
      <CoreServices />
      <Steps />
      <Testimony />
      <Footer />
    </>
  );
}
