import logo from "../../../public/Logo.png";
import Socials from "./Socials";
import { IoSend } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="mt-20 p-10 md:px-16 bg-[#aed4ff]">
      <div className="max-w-[1250px] m-auto flex justify-start md:justify-center gap-20 flex-wrap md:flex-nowrap">
        <div className="fext flex-col gap-4">
          <img src={logo} alt="logo" className="w-12 mb-4" />
          <div className="font-bold flex flex-col gap-4">
            <p>4517 Washington Ave</p>
            <p>Manchester, Kentucky 39495</p>
            <p>+1 (505) 555-0125</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-xl">{t("Departments")}</p>
          <p>{t("Cardiology")}</p>
          <p>{t("Dentistry")}</p>
          <p>{t("Neurology")}</p>
          <p>{t("Orthopedics")}</p>
          <p>{t("Surgery")}</p>
          <p>{t("seemore")}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-xl">{t("Menu")}</p>
          <p>{t("Home")}</p>
          <p>{t("Doctors")}</p>
          <p>{t("Services")}</p>
          <p>{t("Reviews")}</p>
        </div>
        <div className="max-w-xs">
          <p className="ml-1 font-bold max-w-[250px]">
           {t("Have Something To Talk About With Our Professionals?")}
          </p>
          <div className="flex items-center border-[#1d4d85] border-2 bg-transparent shadow-md px-4 py-2 my-4">
            <input type="email" className="
            w-full  outline-none
              placeholder:text-[#1d4d85] bg-transparent" placeholder="Your Email"/>
            <IoSend  className="cursor-pointer w-6 h-6"/>
          </div>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
