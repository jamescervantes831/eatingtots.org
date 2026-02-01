import LogoSlider from "../components/logo";
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Directors from "../components/directors";
import Registration from "../components/registration";
import Footer from "../components/footer";
import { FormPage } from "@/components/forms/FormPage";
export default function Home() {
  return (
    <section className="bg-white">
      <LogoSlider />
      <Header />
      <Hero />
      <About />
      <FormPage />
      <Registration />
      <Directors />
      <Footer />
    </section>
  );
}
