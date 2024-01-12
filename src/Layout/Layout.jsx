import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";

const Layout = () => {
  return (
    // main
    <div>
      {/* header */}
      <header className="bg-[black]    text-[white] flex justify-between items-center py-4">
        <img src="src/assets/LOGO (2).svg" alt="" className="mx-8" />

 <div className="flex md:w-[60%] mx-5">
        <ul className="flex items-center mob:hidden md:inline-flex mx-2 w-[100%] justify-around font-mono">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/portfolio">
            <li>Portfolio</li>
          </Link>

          <Link to="/news">
            <li>News</li>
          </Link>
        </ul>

        <Button variant="contained" sx={{background:"#FA9021"}} >Contact</Button>
        </div>
      </header>

{/* Outlet */}
     <div>
     <Outlet></Outlet>
      </div>

      <footer className="bg-[black] text-[white] py-8">
<div className="md:flex justify-around ">
  <div>
  <img src="src/assets/LOGO (2).svg" alt="" className="mx-8" />
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
<p>@Logo</p>
  </div>
  <div>
    <ul>
      <li className="py-3">About us</li>
      <li>Zeux</li>
      <li>Portfolio</li>
      <li>Careers</li>
      <li>Contact us</li>
    </ul>
  </div>
  <div>
    <p className="py-3">Contact us</p>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    <p>+908 89097 890</p>
  </div>
  <div >
    <img src="src/assets/Group 12.svg" alt="" />
  </div>
</div>
      </footer>



    </div>
  );
};

export default Layout;
