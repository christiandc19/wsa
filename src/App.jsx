import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Platform from "./components/Platform";
// import Products from "./components/Products";
import HowItWorks from "./components/HowItWorks";
import Surveys from "./components/Surveys";
// import UseCases from "./components/UseCases";
import DemoRequest from "./components/DemoRequest";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";



export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Platform />
      <Surveys />
      {/* <Products />
      <UseCases /> */}
      <DemoRequest />
      <FAQ />
      <Footer />
    </div>
  );
}