import React from "react";
import face from "../Images/face.jpg";
import face2 from "../Images/face2.jpg";
import face3 from "../Images/face3.jpg";
import face4 from "../Images/face4.jpg";

export default function Team() {
  return (
    <div>
      <section className="text-center m-4">
        <h2 className="pt-6">Our Team</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4  m-8 p-6">
          <div >
            <img src={face} alt="pic" className="rounded hover:rounded-lg" />

            <div>
              <h4>Racheal Kuranchie</h4>
              <p>Estate Cashier</p>
            </div>
          </div>

          <div className="rounded-lg">
            <img src={face} alt="pic" className="rounded hover:rounded-lg" />

            <div>
              <h4>Racheal Kuranchie</h4>
              <p>Estate Cashier</p>
            </div>
          </div>

          <div className="rounded-lg">
            <img src={face} alt="pic" className="rounded hover:rounded-lg" />

            <div>
              <h4>Racheal Kuranchie</h4>
              <p>Estate Cashier</p>
            </div>
          </div>

          <div className="rounded-lg">
            <img src={face} alt="pic"  className="rounded hover:rounded-lg"/>

            <div>
              <h4>Racheal Kuranchie</h4>
              <p>Estate Cashier</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
