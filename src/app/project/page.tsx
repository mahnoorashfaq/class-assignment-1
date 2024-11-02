import { FaArrowRightLong } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
export default function Project(){
    return(
<section className="project-container">
<p className="projecth1">Our</p>
<p className="projecth2">Projects</p>
<hr />
<div className="project-box">
    <div className="projectimg1"></div>
    <div className="project-content">
        <h3>Sample Project 1</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
             <button className="viewMore"><a href="/sample-project">VIEW MORE&nbsp;&nbsp;&nbsp;<FaArrowRightLong /></a></button>
    </div>
</div>

<div className="project-box">
    <div className="projectimg2"></div>
    <div className="project-content">
        <h3>Sample Project 2</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
             <button className="viewMore"><a href="/">VIEW MORE&nbsp;&nbsp;&nbsp;<FaArrowRightLong /></a></button>
    </div>
</div>

<div className="project-box">
    <div className="projectimg3"></div>
    <div className="project-content">
        <h3>Sample Project 3</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
             <button className="viewMore"><a href="/">VIEW MORE&nbsp;&nbsp;&nbsp;<FaArrowRightLong /></a></button>
    </div>
</div>
<div className="gallery-end-icons">
            <div className="galley-num">01&nbsp;&nbsp;&nbsp; /&nbsp;&nbsp;&nbsp; 05</div>
        <div className="galley-icon"><IoArrowBackOutline /></div>
        <div className="galley-icon"><IoMdArrowForward />
        </div></div>
</section>   
 )
}