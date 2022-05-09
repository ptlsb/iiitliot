import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
// MUI Components
import {
  Stack,
  Typography,
  Button,
  TextField,
  CircularProgress,
  BottomNavigation,
} from "@mui/material";

// Icons
import { SettingsInputComponentSharp, Twitter } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <span>Home Appliances Data</span>
        </h3>
        <p className="footer-links">
          <Link className="footer-links-a" to="/">
            Home
          </Link>
          ·
          <Link className="footer-links-Link" to="/sensor">
            Sensor
          </Link>
          ·
          <Link className="footer-links-Link" to="/login">
            Login
          </Link>
        </p>

        <p className="footer-company-name">Home Appliances Data © 2022</p>

        <div className="footer-icons">
          <Link to="https://www.facebook.com/kushagra.patel.581/">
            <Facebook color="inherit" />
          </Link>
          <Link to="https://twitter.com/kushagra_23_12">
            <Twitter />
          </Link>
          <Link to="https://www.linkedin.com/in/kushagra-patel-176492196/">
            <LinkedIn />
          </Link>
          <Link to="https://github.com/ptlsb">
            <GitHub />
          </Link>
        </div>
      </div>

      <div className="footer-right">
        <p>Contact Us</p>
        <br />
        <p>+91 97544 48201</p>
        <br />
        <p>contact@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
