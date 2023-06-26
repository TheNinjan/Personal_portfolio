import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard name={"Kalakar"} feedback={"Your work is amazing ."} />

        <TestimonialCard name={"Ranu"} feedback={"Wow what a portfolio!!"} />

        <TestimonialCard name={"Abhishek Patel"} feedback={"Amazing "} />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
