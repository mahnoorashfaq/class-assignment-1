import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
export default function Footer(){
    return(
        <section className="footer-container">
           <div className="footer-c-box"> 
            <div className="Logo-footer"></div>
            <div className="footer-content">
                <p>Information</p>
                <li><a href="./">Main</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/project">Projects</a></li>
                <li><a href="/certification">Certifications</a></li>
                <li><a href="/contact">Contacts</a></li>
            </div>
            <div className="footer-content">
                <p>Contacts</p>
                <li className="icons"><IoLocationOutline /> 1234 Sample Street Austin Texas 78704</li>
                <li><MdOutlineLocalPhone /> 512.333.2222</li>
                <li> <MdOutlineMail /> sampleemail@gmail.com</li>
            </div>
            <div className="footer-content">
                <p>Social Media</p>
              <p><FaFacebookF /> &nbsp;<FaTwitter /> &nbsp;<FaLinkedin />&nbsp; <FaPinterestP /></p>
            </div></div>
            <br />
            <hr />
            <br />
            <p className="footer-label">© 2021 All Rights Reserved</p>
        </section>
    )
}