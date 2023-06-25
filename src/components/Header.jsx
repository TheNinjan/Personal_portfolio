import React from "react";

const Header = () => {
  return (
    <>
      <nav>
        <NavContent />
      </nav>
    </>
  );
};

const NavContent = () => (
  <>
    <h2>Niranjan Solanki</h2>
    <div>
      <a href="#home">Home</a>
      <a href="#work">Work</a>
      <a href="#services">Services</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#experince">Experince</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="mailto:theninjan.com@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
