import React from "react";
import data from "@/public/data/category-products.json";

const Cartitem: React.FC = () => {
    return( <>
        <div className="row mx-0 py-4 g-0 border-bottom">
        {data.entries.map((brand, index) =>(
        <div key={index} className="col-2 position-relative">
          <span className="checkout-item-qty">3</span>
          <picture className="d-block ">
            <img
              className="img-fluid"
              src={ brand.img }
              alt={`Logo ${index + 1}`}
            />
          </picture>
        </div>
        ))}
        {data.entries.map((brand, index) =>(
        <div key={index} className="col-9 offset-1">
          <div>
            <h6 className="justify-content-between d-flex align-items-start mb-2">{brand.title }
              <i className="ri-close-line ms-3" />
            </h6>
            <span className="d-block text-muted fw-bolder text-uppercase fs-9">
              { brand.options}
            </span>
          </div>
          <p className="fw-bolder text-end text-muted m-0">{ brand["sale-price"]}</p>
        </div>
           ))}
      </div>

      </>
);
};

export default Cartitem;
