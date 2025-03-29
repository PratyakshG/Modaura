import SubscribeForm from "../SubscribeForm/SubscribeForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ComingSoonContent from "../ComingSoonContent/ComingSoonContent";
import Image from "next/image";
import logo from "../../../public/ModAura_logo.png";

export default function StandardComingSoon() {
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen w-screen">
        <div className="w-full h-1/3 md:h-screen flex items-center justify-center">
          <div className="w-3/4 flex flex-col mx-auto text-center md:text-right z-10">
            <Image
              src={logo}
              alt="logo"
            />
            <h1 className="text-sm md:text-xl font-outfit font-light lowercase">
              Minimal. Elegant. Effortless.
            </h1>
          </div>
          <div
            className="w-full md:w-1/2 h-1/3 md:h-full blur-[2px] absolute -z-10"
            style={{
              backgroundImage: "url('/backgroundCS.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="bg-ivory w-full h-2/3 md:h-screen flex flex-col items-center justify-center">
          <Header />
          <ComingSoonContent />
          <Footer />
        </div>
      </div>
    </>
  );
}
