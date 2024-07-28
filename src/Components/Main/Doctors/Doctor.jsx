import { Doctors } from "../Data";
import { useTranslation } from "react-i18next";

export default function Doctor() {

  const { t } = useTranslation();
  return (
    <div className="flex justify-between gap-10 overflow-auto px-5 md:p-0" data-aos="flip-up">
      {Doctors.map((item) => (
        <div key={item.id}>
          <div className="bg-mainColor p-3 pb-0 cursor-pointer rounded-tl-[100px] rounded-br-[100px] lg:rounded-tl-[130px] lg:rounded-br-[120px] overflow-hidden 
          hover:rounded-tl-[0] hover:rounded-br-[0] hover:rounded-tr-[100px] hover:rounded-bl-[100px] transition-all duration-500">
            <img src={item.image} className="min-w-[180px]" alt="" />
          </div>
          <p className="font-bold pt-3">{item.name}</p>
          <p className="pb-4">{t(item.job)}</p>
        </div>
      ))}
    </div>
  );
}
