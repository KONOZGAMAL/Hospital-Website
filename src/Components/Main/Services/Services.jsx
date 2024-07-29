import Banner from "./Banner";
import ListItem from "./ListItem";
import Service from "./Service";
import { useTranslation } from "react-i18next";
import { service } from "../Data";
import { useState } from "react";

export default function Services() {
  const [activeServices, setActiveServices] = useState("Cardiology");
  const { t } = useTranslation();
  return (
    <section className="pt-24 md:pt-32" id="services">
      <h2 className="text-4xl font-bold text-center mb-10">{t("Services")}</h2>
      <div className="flex justify-between flex-col lg:flex-row gap-10 lg:gap-5">
        <Service
          service={service}
          setActiveServices={setActiveServices}
          activeServices={activeServices}
        />
        <div className="lg:min-w-[345px]" data-aos="fade-right">
          {service.map(
            (itemsList, index) =>
              activeServices === itemsList.id && (
                <ListItem
                  list={itemsList.texts}
                  key={index}
                  heading={itemsList.heading}
                />
              )
          )}
          <button className="lg:ml-5 bg-primary transition hover:bg-[#158ace] px-8 py-1 shadow-lg rounded-3xl text-white mt-5">
            {t("Appointment Now")}
          </button>
        </div>
      </div>
      <div className="px-10 xs:px-16">
        <Banner />
      </div>
    </section>
  );
}
