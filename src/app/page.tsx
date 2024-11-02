import Hero from "@/component/hero"
import About from "@/component/about"
import Main from "@/component/main"
import Project from "@/component/project"
import ContactUS from "@/component/contact-us"
export default function Home(){
  return(
    <div>
      <Hero />
      <About />
      <Main />
      <Project />
      <ContactUS />
      </div>
  )
}