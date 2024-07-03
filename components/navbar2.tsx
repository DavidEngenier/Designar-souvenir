
import Menus2 from "@/components/ui/navbar/Menus2";
import Dropdowncart from "@/components/cart/cart-remove/cartdropdown";
import React from "react";
import data from "@/public/data/category-products.json";
import Cart from '@/components/ui/navbar/dropdowncart';

const Navbar2 : React.FC = () => {
  return (
    <>
  {/* Navbar */}
  
  <nav className=" navbar-expand-lg navbar-light bg-white flex-column ">
  
    <div className="container-fluid">
    
      <div className="w-100">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
         {/* Logo*/}
          <a
            className="navbar-brand fw-bold fs-3 m-0 p-0 flex-shrink-0 order-0"
            href=""
          >  
            {/* {{> logo/logo-icon }}*/}
          </a>
          {/* / Logo*/}
          {/* Navbar Icons*/}
          <ul className="list-unstyled mb-0 d-flex align-items-center order-1 order-lg-2 nav-sidelinks">
           
            {/* Mobile Nav Toggler*/}
            <li className="d-lg-none">
              
              <span
                className="nav-link text-body d-flex align-items-center cursor-pointer"
                
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="ri-menu-line ri-lg me-1" /> Menu
              </span>
            </li>
            
            {/* /Mobile Nav Toggler*/}
            {/* Navbar Search*/}
            <li className="d-none d-sm-block">
              <span className="nav-link text-body search-trigger cursor-pointer">
                Search
              </span>
              {/* Search navbar overlay*/}
              <div className="navbar-search d-none">
                <div className="input-group mb-3 h-100">
                  <span className="input-group-text px-4 bg-transparent border-0">
                    <i className="ri-search-line ri-lg" />
                  </span>
                  <input
                    type="text"
                    className="form-control text-body bg-transparent border-0"
                    placeholder="Enter your search terms..."
                  />
                  <span className="input-group-text px-4 cursor-pointer disable-child-pointer close-search bg-transparent border-0">
                    <i className="ri-close-circle-line ri-lg" />
                  </span>
                </div>
              </div>
              <div className="search-overlay" />
              {/* / Search navbar overlay*/}
            </li>
            
            {/* /Navbar Search*/}
            {/* Navbar Login*/}
            <li className="ms-1 d-none d-lg-inline-block">
              <a className="nav-link text-body" href="{{webRoot}}/login.html">
                Account
              </a>
            </li>
            {/* /Navbar Login*/}
            {/* Navbar Cart Icon*/}
            <li className="
           dropdown-cart ms-1 d-inline-block position-relative ">
              <button
                className="nav-link me-0 disable-child-pointer border-0 p-0 bg-transparent text-body"
                type="button"
                
              >
                Bag (2)
              </button>
              
              <Dropdowncart/>
            </li>
            {/* /Navbar Cart Icon*/}
          </ul>
          {/* Navbar Icons*/}
          {/* Main Navigation*/}
          <div
            className="flex-shrink-0  navbar-collapse navbar-collapse-light w-auto flex-grow-1 order-2 order-lg-1"
            id="navbarNavDropdown">
            {/* Menu*/}
        <Menus2/>
            {/* / Menu*/}
          </div>
          {/* / Main Navigation*/}
        </div>
      </div>
    </div>
  </nav>
      {/* / Navbar */}
    </>
  );
};

export default Navbar2;
