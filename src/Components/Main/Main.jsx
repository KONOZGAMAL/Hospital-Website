import Doctors from "./Doctors/Doctors";
import Home from "./Home/Home";
import Review from "./Review/Review";
import Services from "./Services/Services";


export default function Main() {
  return (
    <div className="m-auto max-w-[1250px]">
      <Home/>
      <Services/>
      <Doctors/>
      <Review/>
    </div>
  )
}
// px-5 md:px-16