import React from "react";
import Startsamls from "../Reviews/smallstars";
import productOptionsData from '@/public/data/product-options.json';
import OptionRadio from "../option/optionradio";




const InfoProdcut :React.FC = () => {

    const { entries: productOptions } = productOptionsData;


    if (!productOptions || !productOptions.length) {
        return null;
    }

    return(
        <>
<div className="pb-3" data-aos="fade-in">
<div className="d-flex align-items-center mb-3">
    <p className="small fw-bolder text-uppercase tracking-wider text-muted m-0 me-4">
    KiiKii
    </p>
    <div
    className="d-flex justify-content-start align-items-center disable-child-pointer cursor-pointer"
    data-pixr-scrollto=""
    data-target=".reviews"
    >
    <Startsamls/>
    <small className="text-muted d-inline-block ms-2 fs-bolder">
        (105 reviews)
    </small>
    </div>
</div>
<h1 className="mb-1 fs-2 fw-bold">
    Kiikii Osaka Japan Mens T-Shirt Limited Edition
</h1>
<div className="d-flex justify-content-between align-items-center">
    <p className="fs-4 m-0">$34.99</p>
</div>
<div className="border-top mt-4 mb-3 product-option">
    <small className="text-uppercase pt-4 d-block fw-bolder">
    <span className="text-muted">Available Sizes (Mens)</span> :{" "}
    <span className="selected-option fw-bold" data-pixr-product-option="size"></span>
    </small>
    <div className="mt-4 d-flex justify-content-start flex-wrap align-items-start">
    {productOptions.map((option) => (
        <OptionRadio
        key={option.value}
        option={option}
        type="sizes"
        optionClasses="form-check-rounded"
        />
    ))}
    </div>
</div>
<div className="mb-3">
    <small className="text-uppercase pt-4 d-block fw-bolder text-muted">
    Available Designs :
    </small>
    <div className="mt-4 d-flex justify-content-start flex-wrap align-items-start">
    <picture className="me-2">
        <img
        className="f-w-24 p-2 bg-light border-bottom border-dark border-2 cursor-pointer"
        src="/OLDS/images/products/product-page-thumb-1.jpeg"
        alt="{{ config.defaultImgAlt }}"
        />
    </picture>
    <picture>
        <img
        className="f-w-24 p-2 bg-light cursor-pointer"
        src="/OLDS/images/products/product-page-thumb-2.jpeg"
        alt="{{ config.defaultImgAlt }}"
        />
    </picture>
    </div>
</div>
<button className="btn btn-dark w-100 mt-4 mb-0 hover-lift-sm hover-boxshadow">
    Add To Shopping Bag
</button>
{/* Product Highlights*/}
<div className="my-5">
    <div className="row">
    <div className="col-12 col-md-4">
        <div className="text-center px-2">
        <i className="ri-24-hours-line ri-2x" />
        <small className="d-block mt-1">Next-day Delivery</small>
        </div>
    </div>
    <div className="col-12 col-md-4">
        <div className="text-center px-2">
        <i className="ri-secure-payment-line ri-2x" />
        <small className="d-block mt-1">Secure Checkout</small>
        </div>
    </div>
    <div className="col-12 col-md-4">
        <div className="text-center px-2">
        <i className="ri-service-line ri-2x" />
        <small className="d-block mt-1">Free Returns</small>
        </div>
    </div>
    </div>
</div>
{/* / Product Highlights*/}
  {/* Product Accordion */}
<div className="accordion" id="accordionProduct">
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
        <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
        >
        Product Details
        </button>
    </h2>
    <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionProduct"
    >
        <div className="accordion-body">
        <p className="m-0">
            Made from 100% organic cotton, The Kiikii Osaka Japan T-Shirt was
            created with everyday use in mind. It features printed graphics and
            heavyweight fabric for maximum comfort and lifespan.
        </p>
        </div>
    </div>
    </div>
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
        <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
        >
        Details &amp; Care
        </button>
    </h2>
    <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionProduct"
    >
        <div className="accordion-body">
        <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex border-0 row g-0 px-0">
            <span className="col-4 fw-bolder">Composition</span>
            <span className="col-7 offset-1">98% Cotton, 2% elastane</span>
            </li>
            <li className="list-group-item d-flex border-0 row g-0 px-0">
            <span className="col-4 fw-bolder">Care</span>
            <span className="col-7 offset-1">
                Professional dry clean only. Do not bleach. Do not iron.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Delivery &amp; Returns
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionProduct"
      >
        <div className="accordion-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex border-0 row g-0 px-0">
              <span className="col-4 fw-bolder">Delivery</span>
              <span className="col-7 offset-1">
                Standard delivery free for orders over $99. Next day delivery
                $9.99
              </span>
            </li>
            <li className="list-group-item d-flex border-0 row g-0 px-0">
              <span className="col-4 fw-bolder">Returns</span>
              <span className="col-7 offset-1">
                30 day return period. See our{" "}
                <a className="text-link-border" href="#">
                  terms &amp; conditions.
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* / Product Accordion*/}
</div>


        </>
    );

};

export default InfoProdcut;