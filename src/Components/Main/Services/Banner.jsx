import banner from "../../../../public/assets/Images/banner.png";
import ListItem from "./ListItem";
import { list } from "../Data";

export default function Banner() {

  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 md:gap-10 mt-20">
      <div className="max-w-xs md:max-w-md" data-aos="fade-right">
        <ListItem list={list} heading="We Are Always Here To Ensure Best Medical Treatment"/>
      </div>
      <div className="bg-[#9ae7ff] shadow-xl rounded-2xl p-5 pb-0 max-w-xs md:max-w-md" data-aos="fade-left">
      <img src={banner} alt="banner" />
      </div>
    </div>
  );
}
