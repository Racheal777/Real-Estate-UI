import React from "react";

import Navbarx from "./Nav";
import About from "./about";
import Properties from "./Properties";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Header from "./Header";
import Numbers from "./Numbers";
import Facilities from "./Facilities";
import Navz from "./Navz";
import Team from "./Team";

export default function Main() {
  return (
    <div className="md:container md:mx-auto overflow-hidden">
      {/* <Navbarx /> */}
      <Navz/>

      <Header />
      <section>
        <About />
      </section>

      <section>
        <Properties />
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
        <Testimonials />
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
