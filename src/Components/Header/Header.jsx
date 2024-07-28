import { useEffect, useState } from "react";
import Logo from "../../../public/Logo.png";
import NavBar from "./NavBar";
import { useTranslation } from "react-i18next";
export default function Header() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const { i18n } = useTranslation();
  useEffect(() => {
    if (i18n.language == "ar") {
      document.body.classList.remove("en");
      document.body.setAttribute("dir", "rtl");
    } else {
      document.body.classList.add("en");
      document.body.setAttribute("dir", "ltr");
    }
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`flex items-center justify-between ${
        isTopOfPage ? " " : "bg-[#84ceff]"
      } transition fixed top-0 z-30 w-full p-5 md:px-16`}
    >
      <img className="w-10 sm:w-20" src={Logo} alt="Logo" />
      <div className="flex items-center flex-row-reverse md:flex-row  gap-10 lg:gap-20">
        <NavBar />
        <div>
          <p
            className="font-bold items-center text-xl cursor-pointer"
            onClick={() => {
              if (i18n.language == "ar") {
                i18n.changeLanguage("en");
                document.body.classList.add("en");
                document.body.setAttribute("dir", "ltr");
              } else {
                i18n.changeLanguage("ar");
                document.body.classList.remove("en");
                document.body.setAttribute("dir", "rtl");
              }
            }}
          >
            {i18n.language == "ar" ? "English" : "عربي"}
          </p>
        </div>
      </div>
    </div>
  );
}
