
import React from "react";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import MyWork from "./Components/MyWork/MyWork.jsx";
import Navbar from "./Components/NavBar/Navbar.jsx";
import Services from "./Components/Services/Services.jsx";

function App() {
  return(
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <MyWork></MyWork>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );

}

export default App
