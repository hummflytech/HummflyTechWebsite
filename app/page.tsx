import ContactUS from "@/components/ContactUs/contactus";
import Footer from "@/components/Home/footer";
import Home from "@/components/Home/home";
import Services from "@/components/Service/services";
import Portfolio from "@/components/portfolio/portfolio";
import Process from "@/components/process/process";
import TestimonialList from "@/components/testimonials/testimonials";
import WhyChooseUs from "@/components/whyUs/whyChooseUs";
import About from "../components/about/page";

export default function Page() {
  return (
    <div className="min-h-screen ">
      <Home />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Portfolio />
      {/* <TestimonialList /> */}
      <ContactUS />
      <Footer />
    </div>
  );
}
