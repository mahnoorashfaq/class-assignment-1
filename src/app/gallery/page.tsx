import { IoArrowBackOutline } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
export default function Gallery(){
    return(
        <section className="gallery-section">
        <p className="galleryh1">Photo</p>
        <p className="galleryh2">Gallery</p>
        <div className="photos-container">
       <div className="photo1"></div>
       <div className="photo2"></div>
       <div className="photo3"></div>
       <div className="photo4"></div>
       <div className="photo5"></div>
       <div className="photo6"></div>
       <div className="photo7"></div>
       <div className="photo8"></div>
       <div className="photo9"></div>
       <div className="photo10"></div>
        </div>
        <div className="gallery-end-icons">
            <div className="galley-num">01&nbsp;&nbsp;&nbsp; /&nbsp;&nbsp;&nbsp; 05</div>
        <div className="galley-icon"><IoArrowBackOutline /></div>
        <div className="galley-icon"><IoMdArrowForward />
        </div>
        </div>
        </section>
    )
}