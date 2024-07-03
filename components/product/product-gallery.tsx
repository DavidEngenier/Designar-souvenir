export default function GaleryProduct() {
    return(
        <>
<div className="row g-3" data-aos="fade-right">
  <div className="col-12">
    <picture>
      <img
        className="img-fluid"
        data-zoomable=""
        src="/OLDS/images/products/product-page-1.jpeg"
        alt="{{ config.defaultImgAlt }}"
      />
    </picture>
  </div>
  <div className="col-12">
    <picture>
      <img
        className="img-fluid"
        data-zoomable=""
        src="/OLDS/images/products/product-page-2.jpeg"
        alt="{{ config.defaultImgAlt }}"
      />
    </picture>
  </div>
  <div className="col-12">
    <picture>
      <img
        className="img-fluid"
        data-zoomable=""
        src="/OLDS/images/products/product-page-3.jpeg"
        alt="{{ config.defaultImgAlt }}"
      />
    </picture>
  </div>
  <div className="col-12">
    <picture>
      <img
        className="img-fluid"
        data-zoomable=""
        src="/OLDS/images/products/product-page-4.jpeg"
        alt="{{ config.defaultImgAlt }}"
      />
    </picture>
  </div>
</div>
</>
    );

 };