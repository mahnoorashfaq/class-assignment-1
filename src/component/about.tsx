import { FaArrowRightLong } from "react-icons/fa6";
export default function About(){
    return(
   <section className="about-container">
<div className="left-about">
    <div className="box1"></div>
    <div className="box2"></div>
    <div className="box3"></div>
</div>
<div className="right-about">
    <h1>About</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took
         a galley of type and scrambled it to make a type specimen book. It has survived not only 
         five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
         <button className="about-button"><a href='#'>READ MORE&nbsp;&nbsp;&nbsp;<FaArrowRightLong /></a></button>
</div>
   </section>
    )
  }