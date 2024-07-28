import { users } from "../Data";
import { useTranslation } from "react-i18next";


export default function Review() {
  const { t } = useTranslation();
  return (
    <section className="pt-24 md:pt-32" data-aos="zoom-in">
      <h2 className="text-4xl font-bold text-center mb-10">{t("Patient Feedback")}</h2>
      <div className="items-center flex flex-col md:flex-row justify-center gap-5">
        {users.map((items) => (
          <div
            key={items.id}
            className={`max-w-[300px] bg-[#d5f5ff] rounded-3xl shadow-xl p-5`}
          >
            <div className="flex gap-5">
              <img src={items.image} alt="avter" className="rounded-full" />
              <div>
                <p>{t(items.name)}</p>
                <span className="text-[11px] text-gray-600">{t(items.job)}</span>
              </div>
            </div>
            <p className="opacity-90 text-xs mt-2">{t(items.ex)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
