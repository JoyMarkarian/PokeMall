import React from "react";
import { HashLink } from "react-router-hash-link";

import Form from "./Form";

import "./Footer.css";

import PictoT from "../assets/twitter.png";
import PictoI from "../assets/insta.png";
import PictoF from "../assets/facebook.png";

export default function Footer() {
  return (
    <footer className="footer">
      <Form />
      <div className="container w-100 p-1 border-top mt-4">
        <div className="footer-lien d-flex justify-content-evenly mt-4">
          <div className="footer-condition text-justify">
            <h1 className="title-footer mb-3">LEGAL INFORMATIONS</h1>
            <p className="mb-2">Terms of sales</p>
            <p className="mb-2">Privacy Policy</p>
          </div>
          <div className="menu-lien text-justify">
            <h1 className="title-footer mb-3">MENU</h1>
            <p className="mb-2">
              <HashLink to="/#">Home</HashLink>
            </p>
            <p className="mb-2">
              <HashLink to="/products#">All Products</HashLink>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center m-3">
          <a href="https://twitter.com/">
            <img src={PictoT} className="picto-rs m-2" alt="picto" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={PictoI} className="picto-rs m-2" alt="picto" />
          </a>
          <a href="https://www.facebook.com/">
            <img src={PictoF} className="picto-rs m-2" alt="picto" />
          </a>
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
