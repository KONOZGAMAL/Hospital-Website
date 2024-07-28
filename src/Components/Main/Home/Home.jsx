import image from "../../../../public/assets/Images/hero.png";
import DescNums from "./DescNums";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation();
  return (
    <section className="pt-24 md:pt-32" id="home">
      <div className="flex flex-col-reverse md:flex-row items-center gap-20 text-center md:text-left">
        <div className="tracking-wider md:tracking-normal max-w-xs lg:max-w-xl" data-aos="fade-right">
          <h1 className="lg:text-7xl text-4xl font-bold">
            {t("Your Health Is Our Top Priority")}
          </h1>
          <p className="text-lg md:text-base lg:text-xl my-10">
           {t("Securely share your comprehensive medical history with doctors and loved ones, for better communication and care.")}
          </p>
          <button className="bg-primary transition hover:bg-[#158ace] px-8 py-1 shadow-lg rounded-3xl text-white">
            {t("Appointment Now")}
          </button>
        </div>
        <div className="max-w-xs md:max-w-none" data-aos="fade-left">
          <img src={image} alt="hero" />
        </div>
      </div>
      <DescNums />
    </section>
  );
}
