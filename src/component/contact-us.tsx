import { FaArrowRightLong } from "react-icons/fa6";
export default function ContactUS(){
    return(
      <section className="contactus-container">
        <div className="foam-container">
 <p>Contact Us</p>
 <input type="text" name="text" id="input" placeholder="Name"/><br />
 <input type="text" name="text" id="input" placeholder="Phone Number*"/><br />
 <input type="text" name="text" id="input" placeholder="E-mail*"/><br />
 <input type="text" name="text" id="input" placeholder="Interested In"/><br />
<textarea name="text" id="textarea" placeholder="Message*"></textarea><br />
<button className="contactus-btn"><a href="">SEND&nbsp; E-MAIl&nbsp;&nbsp;&nbsp;<FaArrowRightLong /></a></button>
        </div>
        <div className="contactimage"></div>
      </section>
    )
  }