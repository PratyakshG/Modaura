import SubscribeForm from "../SubscribeForm/SubscribeForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ComingSoonContent from "../ComingSoonContent/ComingSoonContent";
import Image from "next/image";
import logo from "../../../public/ModAura_logo_light.svg";

export default function StandardComingSoon() {
  return (
    <>
      <div className="flex h-dvh w-screen">
        <div className="w-full max-h-full flex items-center justify-center">
          <div className="flex flex-col text-right absolute z-10">
            <Image
              src={logo}
              alt="logo"
              height={100}
            />
            <h1 className="text-xl font-outfit font-light lowercase">Minimal. Elegant. Effortless.</h1>
          </div>
          <div
            className="w-full h-full blur-[2px]"
            style={{
              backgroundImage: "url('/backgroundCS.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <Header />
          <ComingSoonContent />
          <SubscribeForm />
          <Footer />
        </div>
      </div>
    </>
  );
}
