import { FaArrowRightLong } from "react-icons/fa6";
export default function Hero(){
    return(
   <section className="Hero-container">
   <div className="left-hero">
    <p className="hero-h1">PROJECT</p>
    <p className="hero-h2">Lorum</p>
   </div>
   <div className="right-hero">
    <button className="view-container"><a href="/project">VIEW PROJECT&nbsp;&nbsp;&nbsp;<FaArrowRightLong /></a></button>
   </div>
   </section>
    )
  }