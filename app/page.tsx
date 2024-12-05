import ContactUS from "@/components/ContactUs/contactus";
import Home from "@/components/Home/home";
import Process from "@/components/process/process";
import WhyChooseUs from "@/components/whyUs/whyChooseUs";
// import About from "./about/page";
import Portfolio from "./portfolio/page";
// import TestimonialList from "./testimonials/page";

export default function Page() {
  return (
    <div>
      <Home />
      {/* <About /> */}
      {/* <Portfolio /> */}
      <WhyChooseUs />
      {/* <TestimonialList /> */}
      <Process />
      <ContactUS />
    </div>
  );
}
