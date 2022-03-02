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
            <footer class="footer-distributed">

<div class="footer-left">

    <h3><span>Logo</span></h3>

    <p class="footer-links">
        <a className='footer-links-a' href="#">Home</a>
        ·
        <a className='footer-links-a' href="#">Blog</a>
        ·
        <a className='footer-links-a' href="#">About</a>
        ·
        <a className='footer-links-a' href="#">Contact</a>
    </p>

    <p class="footer-company-name">Company Name © 2022</p>

    <div class="footer-icons">

        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>

    </div>

</div>

<div class="footer-right">

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