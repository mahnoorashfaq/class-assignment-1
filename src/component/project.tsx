import { FaArrowRightLong } from "react-icons/fa6";
export default function Project(){
  return (
    <section className="Project-container">
      <h2 className="pro-heading">Our Projects</h2>
 <div className="project-flex">
  <div className="item1">
    <p>Sample <br />
    Project</p>
    <a href='/project'>View&nbsp; More&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaArrowRightLong /></a>
  </div>
  <div className="item2"></div>
  <div className="item3"></div>
  <div className="item4"></div>
  <div className="item5"></div>
 </div>
 <button className="all-pro-btn"><a href='/project'>All Projects&nbsp;&nbsp;&nbsp;<FaArrowRightLong /></a></button>
    </section>
  )
}
