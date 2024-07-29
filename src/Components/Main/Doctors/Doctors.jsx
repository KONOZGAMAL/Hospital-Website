
import banner2 from "../../../../public/assets/Images/banner2.png";
import Doctor from "./Doctor";
import { useTranslation } from "react-i18next";


export default function Doctors() {
  const { t } = useTranslation();
  return (
    <section className="pt-24 md:pt-32" id="doctors">
    <h2 className="text-4xl font-bold text-center mb-10">{t("Meet Our Specialists")}</h2>
    <Doctor/>
    <div className="pt-20 md:pt-24" data-aos="fade-up">
    <h2 className="text-4xl font-bold text-center mb-10">{t("Who Are We?")}</h2>
    <div className="flex flex-col justify-center" >
    <p className="mb-5 m-auto text-center max-w-2xl text-xs sm:text-base md:text-lg">
    {t( "A collaborative hospital service website is a digital platform that brings together healthcare professionals, patients and administrators to streamline and enganhe the delivery of healthcare services. This innovative platform allows for seamless communication and coordination among healthcare teams, enabling them to provide more efficient and personalized care to patients.")}
    </p>
    <img src={banner2} alt="banner" className="m-auto" data-aos="zoom-in" />
    </div>
    </div>
    </section>
  )
}
