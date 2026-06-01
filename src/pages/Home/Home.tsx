import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import About from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
// import Projects from "./sections/Projects/Projects"

const Home = () => {

    return (
      <>
        <NavBar/>
        <Hero/>
        <About/>
        {/* Projects section commented out — re-enable when projects are updated */}
        {/* <Projects/> */}
        <Footer/>
      </>
    )
  }
  
  export default Home
  