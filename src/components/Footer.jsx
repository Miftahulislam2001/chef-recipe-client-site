import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (

 
  <footer className=" bg-base-200 ">
    <div className='ui-container footer p-10 text-base-content '>
    <div>
    <span className="footer-title">pages</span> 
    <Link to="/" className="link link-hover">Home</Link> 
    <Link to="/blog" className="link link-hover">Blog</Link> 
    <Link to="/login" className="link link-hover">Login</Link> 
    <Link to="/register" className="link link-hover">Register</Link>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link className="link link-hover">About us</Link> 
    <Link className="link link-hover">Contact</Link> 
    <Link className="link link-hover">Jobs</Link> 
    <Link className="link link-hover">Press kit</Link>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link className="link link-hover">Terms of use</Link> 
    <Link className="link link-hover">Privacy policy</Link> 
    <Link className="link link-hover">Cookie policy</Link>
  </div> 
  <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
    </div>
  </footer>
      
   
      


    );
};

export default Footer;