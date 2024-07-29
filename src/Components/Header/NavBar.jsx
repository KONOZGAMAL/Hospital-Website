// // add active class while do scroll in page in react
// import { useState } from "react";
// import useMediaQuery from "../../Hooks/useMediaQuery";
// import { RiMenu3Fill } from "react-icons/ri";
// import { IoCloseSharp } from "react-icons/io5";
// import { useTranslation } from "react-i18next";
// export default function NavBar() {
//   const [isMenuToggled, setIsMenuToggled] = useState(false);
//   const isAboveMediumScreens = useMediaQuery("(min-width: 900px)");
//   const { t } = useTranslation();

  

//   return (
//     <nav className="relative">
//       {isAboveMediumScreens && (
//         <ul className="flex justify-between font-bold items-center gap-20 text-xl">
//           <li>
//             <a>{t("Home")}</a>
//           </li>
//           <li>
//             <a>{t("Doctors")}</a>
//           </li>
//           <li>
//             <a>{t("Services")}</a>
//           </li>
//           <li>
//             <a>{t("Reviews")}</a>
//           </li>
//         </ul>
//       )}
//       {!isAboveMediumScreens && (
//         <button onClick={() => setIsMenuToggled(() => !isMenuToggled)}>
//           <RiMenu3Fill className="h-8 w-8" />
//         </button>
//       )}
//       {!isAboveMediumScreens && isMenuToggled && (
//         <div className="fixed right-0 top-0 z-40 h-80 rounded-es-3xl w-[175px] md:w-[300px] transition-all duration-1000 bg-secondary drop-shadow-2xl">
//           <div className="flex items-center flex-col gap-3">
//             <div
//               className="flex justify-end p-5 md:pr-16 sm:pt-10 cursor-pointer"
//               onClick={() => setIsMenuToggled(() => false)}
//             >
//               <IoCloseSharp className="h-8 w-8" />
//             </div>
//             <div className="w-full flex flex-col items-center gap-5 text-[1rem] list-none">
//               <li className="cursor-pointer">
//                 <a>{t("Home")}</a>
//               </li>
//               <li className="cursor-pointer">
//                 <a>{t("Doctors")}</a>
//               </li>
//               <li className="cursor-pointer">
//                 <a>{t("Services")}</a>
//               </li>
//               <li className="cursor-pointer">
//                 <a>{t("Reviews")}</a>
//               </li>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }



import { useState, useEffect } from "react";
import useMediaQuery from "../../Hooks/useMediaQuery";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 900px)");
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="relative">
      {isAboveMediumScreens && (
        <ul className="flex justify-between font-bold items-center gap-20 text-xl">
          <li className={activeSection === "home" ? "active border-b-2 border-textColor" : ""}>
            <a href="#home">{t("Home")}</a>
          </li>
          <li className={activeSection === "doctors" ? "active border-b-2 border-textColor" : ""}>
            <a href="#doctors">{t("Doctors")}</a>
          </li>
          <li className={activeSection === "services" ? "active border-b-2 border-textColor" : ""}>
            <a href="#services">{t("Services")}</a>
          </li>
          <li className={activeSection === "reviews" ? "active border-b-2 border-textColor" : ""}>
            <a href="#reviews">{t("Reviews")}</a>
          </li>
        </ul>
      )}
      {!isAboveMediumScreens && (
        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
          <RiMenu3Fill className="h-8 w-8" />
        </button>
      )}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 top-0 z-40 h-80 rounded-es-3xl w-[175px] md:w-[300px] transition-all duration-1000 bg-secondary drop-shadow-2xl">
          <div className="flex items-center flex-col gap-3">
            <div
              className="flex justify-end p-5 md:pr-16 sm:pt-10 cursor-pointer"
              onClick={() => setIsMenuToggled(false)}
            >
              <IoCloseSharp className="h-8 w-8" />
            </div>
            <div className="w-full flex flex-col items-center gap-5 text-[1rem] list-none">
              <li className={`cursor-pointer ${activeSection === "home" ? "active border-b-2 border-textColor" : ""}`}>
                <a href="#home">{t("Home")}</a>
              </li>
              <li className={`cursor-pointer ${activeSection === "doctors" ? "active border-b-2 border-textColor" : ""}`}>
                <a href="#doctors">{t("Doctors")}</a>
              </li>
              <li className={`cursor-pointer ${activeSection === "services" ? "active border-b-2 border-textColor" : ""}`}>
                <a href="#services">{t("Services")}</a>
              </li>
              <li className={`cursor-pointer ${activeSection === "reviews" ? "active border-b-2 border-textColor" : ""}`}>
                <a href="#reviews">{t("Reviews")}</a>
              </li>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
