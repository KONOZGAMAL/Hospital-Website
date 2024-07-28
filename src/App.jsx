import { useEffect } from "react";
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="text-[#1d4d85] app min-w-[280px] min-h-screen bg-background">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App