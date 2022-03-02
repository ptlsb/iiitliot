import React from 'react';
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

const Footer = () =>{
    return(
        <div>
            <footer className="footer-distributed">

<div className="footer-left">

    <h3><span>Logo</span></h3>

    <p className="footer-links">
        <a className='footer-links-a' href="#">Home</a>
        ·
        <a className='footer-links-a' href="#">Blog</a>
        ·
        <a className='footer-links-a' href="#">About</a>
        ·
        <a className='footer-links-a' href="#">Contact</a>
    </p>

    <p className="footer-company-name">Company Name © 2022</p>

    <div className="footer-icons">

        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-github"></i></a>

    </div>

</div>

<div className="footer-right">

    <p>Contact Us</p>

    <form action="#" method="post">

        <input type="text" name="email" placeholder="Email"/>
        <textarea name="message" placeholder="Message"></textarea>
        <button>Send</button>

    </form>

</div>

</footer>
        </div>

    );

}

export default Footer;