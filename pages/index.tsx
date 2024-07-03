
"use client"

import Navbarser from "@/components/navbar2";
import Footer2 from "@/components/ui/footer2";
import Menus2 from "@/components/ui/navbar/Menus2";

import Dropdowncart from "@/components/cart/cart-remove/cartdropdown";
import Head from 'next/head';
import Heroswiper from "@/components/swiper/swiper-homepage-hero";
import Logos from "@/components/marque/logo";
import Categories from "@/components/swiper/swiper-categories";
import Instagramsw from "@/components/swiper/instragram";
import Comentarios from '@/components/Reviews/reviews';


import { useEffect } from 'react';
import Navbar2 from '@/components/navbar2';

const runScripts = () => {
  import('@/public/OLDS/js/theme.js')
    .then(() => {
      console.log('theme.js loaded');
    })
    .catch((err) => {
      console.error('Error loading theme.js:', err);
    });
};

const Home = () => {


  
  useEffect(() => {
    const handleResize = () => {
      const mediaQuery = window.matchMedia('(min-width: 768px)');
      if (mediaQuery.matches) {
        runScripts();
      }
    };

    // Ejecutar al montar el componente
    handleResize();

    // Escuchar cambios de tamaño de pantalla
    window.addEventListener('resize', handleResize);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  return (
    <>
    <div className="bg-white">
  <Navbar2/>
  {/* / Navbar*/}

  {/* Main Section*/}
  <section className="mt-0 overflow-hidden ">
    {/* Page Content Goes Here */}
    {/* / Top banner */}
    <section
      className="vh-75 vh-lg-60 container-fluid rounded overflow-hidden"
      data-aos="fade-in"
    >
      <Heroswiper/>
    </section>
    {/*/ Top Banner*/}
    {/* Featured Brands*/}
    <div className="brand-section container-fluid" data-aos="fade-in">
      <div className="bg-overlay-sides-white-to-transparent bg-white py-5 py-md-7">
        <Logos/>
      </div>
    </div>
    {/*/ Featured Brands*/}
    <div className="container-fluid">
      {/* Featured Categories*/}
      <div className="m-0">
          {/**  {{#if (config homepage-categories) }}
                    {{>
                        swiper/swiper-homepage-categories
                        entries=homepage-categories.entries
                    }}
          {{/if}} */}
        <Categories/>
        {/* SVG Used for Clipath on featured images above*/}
        {/* svg */}
      </div>
      {/* /Featured Categories*/}
      {/* Categorias */}
      <section className="py-5" data-aos="fade-in">
  <div className="container">
    <div className="row g-5">
      <div className="col-12 col-md-7" data-aos="fade-right">
        <div className="m-0">
          <p className="small fw-bolder text-uppercase tracking-wider mb-2 text-muted">
            Hiking Essentials
          </p>
          <h2 className="display-5 fw-bold mb-6">
            Our Latest Must-Have Products
          </h2>
          <div className="px-8 position-relative">
            {/* Swiper*/}
            {/*{{> swiper/swiper-linked-carousel-small}}*/}
            {/* /Swiper*/}
            {/* Swiper Arrows */}
            <div className="swiper-prev-linked position-absolute top-50 start-0 mt-n8 cursor-pointer transition-all opacity-50-hover">
              <i className="ri-arrow-left-s-line ri-2x" />
            </div>
            <div className="swiper-next-linked position-absolute top-50 end-0 me-3 mt-n8 cursor-pointer transition-all opacity-50-hover">
              <i className="ri-arrow-right-s-line ri-2x" />
            </div>
            {/* / Swiper Arrows*/}
          </div>
        </div>
      </div>
      <div className="col-md-5 d-none d-md-flex" data-aos="fade-left">
        <div className="w-100 h-100">
          {/* Swiper*/}
          {/*{{> swiper/swiper-linked-carousel-large}}*/}
          {/* / Swiper*/}
        </div>
      </div>
    </div>
  </div>
      </section>
      {/* fin categorias */}
      {/* Homepage Intro*/}
      <Comentarios/>
      {/* / Homepage Intro*/}
      {/* Instagram*/}
      <Instagramsw/>
      {/* / Instagram*/}
    </div>
    {/* /Page Content */}
  </section>
  {/* / Main Section*/}
  <Footer2/>
  {/* / Footer*/}\
  
  {/* ##### Welcome Area Start ##### */}
  </div>
  
  </>
  );
};

export default Home
