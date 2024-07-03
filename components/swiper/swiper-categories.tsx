"use client"
import data from '@/public/data/homepage-categories.json';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css'; // Importa los estilos de Swiper



const Categories: React.FC = () => {



  useEffect(() => {
    // Inicializa Swiper después de que el componente se monte
    const swiper = new Swiper('.swiper-container', {
      spaceBetween: 100,
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      breakpoints: {
        540: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        770: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 4
        },
        1500: {
          slidesPerView: 5
        }
      },
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
      }
    });

    // Registra el evento para destruir Swiper cuando el componente se desmonte
    return () => {
      swiper.destroy;
    };
  }, []);

  return(
<div className="swiper-container overflow-hidden overflow-lg-visible">
  <div className="swiper-wrapper">
  {data.entries.map((brand, index) =>(
      <div key={index} className="swiper-slide align-self-stretch bg-transparent h-auto">
        <div className="me-xl-n4 me-xxl-n5" data-aos="fade-up" data-aos-delay="{{@index}}00">
            <picture className="d-block mb-4 img-clip-shape-one">
            <img
            className="img-fluid d-table mx-auto"
            src={brand.img}
            alt={`Logo ${index + 1}`}
          />
            </picture>
            <p className="title-small mb-2 text-muted">{ brand['small-title']}</p>
            <h4 className="lead fw-bold">{ brand['large-title']}</h4>
            <Link href="/Category" className="btn btn-psuedo align-self-start">{brand['button-text']}</Link>
        </div>
      </div>
    ))}
  </div>

  <div className="swiper-btn swiper-prev swiper-disabled-hide swiper-btn-side btn-icon bg-white text-dark ms-3 shadow mt-n5">
        <i className="ri-arrow-left-s-line "></i>
      </div>
      <div className="swiper-btn swiper-next swiper-disabled-hide swiper-btn-side swiper-btn-side-right btn-icon bg-white text-dark me-3 shadow mt-n5">
        <i className="ri-arrow-right-s-line ri-lg"></i>
      </div>
</div>

  );
};

export default Categories;