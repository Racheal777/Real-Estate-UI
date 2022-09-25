import React from "react";

import About from "./about";
import Properties from "./Properties";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

import Header from "./Header";
import Numbers from "./Numbers";
import Facilities from "./Facilities";
import Navz from "./Navz";
import Team from "./Team";
import Testimonials2 from "./Testimonials2";
import {PropertyAttribute} from '../Components/PropertyForm'

const properties:PropertyAttribute[] = []

export default function Main() {
  return (
    <div className=" md:mx-auto overflow-hidden">
      {/* <Navbarx /> */}
      <Navz/>

      <Header />
      <section>
        <About />
      </section>

      <section>
        <Properties/>
      </section>

      

    <section>
      <Facilities/>
    </section>

      <section>
        <Numbers />
      </section>

      <section>
      <Team/>
    </section>

    
     
    <section>
      <Testimonials2/>
    </section>

      <section>
        <Subscribe />
      </section>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}
