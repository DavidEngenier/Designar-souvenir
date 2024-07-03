import React from 'react';
import data from '@/public/data/slideshow-brands.json';

const Logos: React.FC = () => {
    return(
        <section className="marquee marquee-hover-pause">
  <div className="marquee-body">
    <div className="marquee-section animation-marquee-50">
     
      {data.entries.map((brand, index) =>(
      <div key={index} className="mx-3 mx-lg-5 f-w-24">
      <a className="d-block" href="/category.html">
        <picture>
          <img
            className="img-fluid d-table mx-auto"
            src={brand.img}
            alt={`Logo ${index + 1}`}
          />
        </picture>
      </a>
    </div>
    ))}
    </div>
    <div className="marquee-section animation-marquee-50">
    {data.entries.map((brand, index) => (
    <div key={index} className="mx-3 mx-lg-5 f-w-24">
    <a className="d-block" href="/category.html">
      <picture>
        <img
          className="img-fluid d-table mx-auto"
          src={brand.img}
          alt={`Logo ${index + 1}`}
        />
      </picture>
    </a>
  </div>
    ))}
    </div>
  </div>
</section>

    );
  };

  export default Logos;