import ContactUS from "@/components/ContactUs/contactus";
import Footer from "@/components/Home/footer";
import Home from "@/components/Home/home";
import Services from "@/components/Service/services";
import Process from "@/components/process/process";
import WhyChooseUs from "@/components/whyUs/whyChooseUs";
import About from "./about/page";
import Portfolio from "./portfolio/page";
import TestimonialList from "./testimonials/page";

export default function Page() {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <WhyChooseUs />
      <TestimonialList />
      <ContactUS />
      <Footer />
    </div>
  );
}
