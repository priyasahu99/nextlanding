import Body from "../components/Body";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div className="relative bg-default-white w-full h-[4376px] overflow-hidden text-center text-17xl text-neutral-d-grey font-label-medium-label">

      <Navbar />
      <Home />
      <Body />

      <div className="absolute top-[657px] left-[calc(50%_-_23px)] flex flex-row items-start justify-start gap-[8px]">
        <div className="relative rounded-[50%] bg-brand-primary w-2.5 h-2.5" />
        <div className="relative rounded-[50%] bg-brand-primary w-2.5 h-2.5 opacity-[0.3]" />
        <div className="relative rounded-[50%] bg-brand-primary w-2.5 h-2.5 opacity-[0.3]" />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
