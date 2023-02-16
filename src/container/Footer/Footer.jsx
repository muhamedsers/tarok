import React from "react";
import "./Footer.scss";
import insta from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import facebook from "../../assets/facebook.png";
import share from "../../assets/share.png";
import social from "../../assets/social.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="socialContainer">
        <div className="iconContainer">
          <button>
            <img src={insta} alt="" />
          </button>
          <button>
            <img src={youtube} alt="" />
          </button>
          <button>
            <img src={facebook} alt="" />
          </button>
          <button>
            <img src={social} alt="" />
          </button>
          <button>
            <img src={share} alt="" />
          </button>
        </div>
      </div>
      <address>© 2023 Muhamed Karahasanović, Edvin Bečić</address>
    </div>
  );
};

export default Footer;
