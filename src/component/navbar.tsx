
import { RxHamburgerMenu } from "react-icons/rx";
export default function Navbar(){
    return(
        <header className="header-container">
    <div className="logo"><a href='/'></a></div>
<div className="nav-container">
<li className="nav-main"><a href='/'>Main</a></li>
<li><a href='/gallery'>Gallery</a></li>
<li><a href='/project'>Projects</a></li>
<li><a href='/certification'>Certifications</a></li>
<li><a href='/contact'>Contacts</a></li>
</div>
<RxHamburgerMenu className="hamburger"/>
        </header>
    )
}
