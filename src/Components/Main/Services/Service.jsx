import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export default function Service({
  service,
  setActiveServices,
  activeServices,
}) {
  const { t } = useTranslation();
  const sellectItem = (_id) => {
    setActiveServices(_id);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-5" data-aos="fade-left">
      {service.map((item) => (
        <div
          key={item.id}
          onClick={() => sellectItem(item.id)}
          className={`${
            activeServices === item.id && "rounded-tl-[100px] bg-activeColor"
          } cursor-pointer transition-all bg-[#ffffffd1] rounded-lg flex flex-col items-center gap-4 p-2 xs:p-4 lg:p-14 shadow-md hover:bg-[#c2f1ff]`}
        >
          <img
            className="max-w-[30px] xs:max-w-[50px] md:max-w-[75px] lg:max-w-[60px]"
            src={item.image}
            alt="banner"
          />
          <h3>{t(item.name)}</h3>
        </div>
      ))}
    </div>
  );
}
Service.propTypes = {
  service: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  setActiveServices: PropTypes.func.isRequired,
  activeServices: PropTypes.string.isRequired,
};



