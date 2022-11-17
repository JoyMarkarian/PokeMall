import React from "react";
import Form from "./Form";

import "./Footer.css";

import PictoT from "../assets/twitter.png";
import PictoI from "../assets/insta.png";
import PictoF from "../assets/facebook.png";

export default function Footer() {
  return (
    <footer className="footer">
      <Form />
      <div className="container w-100 p-1 border-top">
        <div className="container text-center">
          <div className="footer-lien row mt-5">
            <div className="footer-condition text-center col-6 p-1">
              <h1 className="fs-4 mb-3">Legal Informations </h1>
              <p>Terms of sales</p>
              <p>Privacy Policy</p>
              <p>Cookie settings</p>
              <p>Legal Notice</p>
            </div>
            <div className="partner-lien col-6 col-sm-4 p-1 text-center">
              <h1 className="fs-4 mb-3">Partner sites</h1>
              <p>Lien 1</p>
              <p>Lien 2</p>
              <p>Lien 3</p>
              <p>Lien 4</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center m-3">
          <img src={PictoT} className="picto-rs m-2" alt="picto" />
          <img src={PictoI} className="picto-rs m-2" alt="picto" />
          <img src={PictoF} className="picto-rs m-2" alt="picto" />
        </div>
        <div className="text-center">
          <p className="text-reset">
            © 2022 Copyright - Approved by Professor Chen
          </p>
        </div>
      </div>
    </footer>
  );
}
