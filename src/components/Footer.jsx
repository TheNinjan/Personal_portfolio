import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import vg from "../assets/vg.png";
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={vg} alt="Creater" />

        <h2>The Ninjan</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com/theninjan/" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/theninjan/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/theninjan/" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
