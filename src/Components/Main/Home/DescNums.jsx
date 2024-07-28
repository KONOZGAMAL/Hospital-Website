
import { Banner1 } from "../Data";
import { useTranslation } from "react-i18next";

export default function DescNums() {
  const { t } = useTranslation();
  return (
    <div className="p-5 md:px-20">
    <div className="flex px-10 xs:px-16 sm:px-5 md:px-0 gap-5 flex-wrap items-center md:flex-nowrap text-center justify-center md:justify-around mt-10">
      {Banner1.map((item, _id) => (
        <div
          key={_id}
          data-aos="fade-up"
          className="rounded-3xl shadow-xl p-6 md:px-2 lg:w-1/5 w-xl bg-[#ffffffd1]"
        >
          <h3 className="lg:text-4xl text-2xl font-bold mb-2">{item.name}</h3>
          <p className="lg:text-base text-sm">{t(item.dec)}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
